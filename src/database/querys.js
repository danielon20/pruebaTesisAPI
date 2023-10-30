export const querys = {
    getAllRoles: "SELECT * FROM Rol",
    getRoleById: "SELECT * FROM Rol  Where id_rol = @id_rol",
    addNewRole:
      "INSERT INTO Rol (nombre_rol, descripcion) VALUES (@nombre_rol,@descripcion);",
    deleteRole: "DELETE FROM Rol  Where id_rol = @id_rol",
    updateRoleById:
      "UPDATE Rol SET nombre_rol = @nombre_rol, descripcion = @descripcion WHERE id_rol = @id_rol",
  };