const modeloUsuarios = {
    queryGetUsers:"SELECT * FROM FIFA",
    queryGetUserByID: `SELECT * FROM FIFA WHERE ID = ?`,
    queryDeleteUserByID: `UPDATE FIFA SET Activo ='N' WHERE ID = ?`,
    queryUserExists: `SELECT Nombre FROM FIFA WHERE Nombre = ?`,
    queryAddUser: `
    INSERT INTO FIFA (
        Activo,
        Nombre,
        Liga,
        J_Cham,
        J_Europa,
        Estadio,
        DT

    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `,

    queryGetUserInfo: `
    SELECT Nombre, Liga, J_Cham, J_Europa, Estadio, DT 
    FROM FIFA 
    WHERE Nombre = ?
    `,

    queryUpdateByUsuario: `
    UPDATE FIFA SET
        Liga = ?,
        J_Cham = ?,
        J_Europa = ?,
        Estadio = ?,
        DT = ?
    WHERE Nombre = ?
    `,
}


module.exports = modeloUsuarios