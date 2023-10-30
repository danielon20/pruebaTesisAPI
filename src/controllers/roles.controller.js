import { getConnection,querys,sql } from "../database";

export const getRoles = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Rol')
        res.json(result.recordset);
    }catch (error) {
        res.status(500);
        res.send(error.message);
      }
}

export const createNewRole = async (req,res) => {

    const {nombre_rol , descripcion} = req.body;
     // validating
    if (nombre_rol == null || descripcion == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    try {
        const pool = await getConnection();
    
        await pool
          .request()
          .input("nombre_rol", sql.VarChar, nombre_rol)
          .input("descripcion", sql.VarChar, descripcion)

          .query(querys.addNewRole);
    
        res.json({ nombre_rol, descripcion });
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}

export const getRoleById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id_rol", req.params.id)
        .query('SELECT * FROM Rol  Where id_rol = @id_rol');
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const deleteRoleById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id_rol", req.params.id)
        .query("DELETE FROM Rol  Where id_rol = @id_rol");
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const updateRoleById = async (req, res) => {
    const {nombre_rol , descripcion} = req.body;
    // validating
   if (nombre_rol == null || descripcion == null) {
       return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
   }
  
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("nombre_rol", sql.VarChar, nombre_rol)
        .input("descripcion", sql.VarChar, descripcion)
        .input("id_rol", req.params.id)
        .query(querys.updateRoleById);
        res.json({ nombre_rol, descripcion });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };