export const querys = {
    //getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
    //getProducById: "SELECT * FROM Products Where Id = @Id",
    addNewRole:
      "INSERT INTO Rol (nombre_rol, descripcion) VALUES (@nombre_rol,@descripcion);",
    //deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
    //getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
    updateRoleById:
      "UPDATE Rol SET nombre_rol = @nombre_rol, descripcion = @descripcion WHERE id_rol = @id_rol",
  };