// let mysql = require("mysql2")

// let connection = mysql.createConnection(
//     {
//         host        : "localhost",
//         user        : "root",
//         password    : "Contraseña",
//         database    : "CODENOTCH"
//     }
// )

// connection.connect(function(error){
//     if(error)
//     console.log(error);
//     else console.log("Conexión correcta");
// });


// let sql = "DELETE FROM Notas"
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else console.log("Tabla borrada");
// })

// let sql = "DROP TABLE Profesores";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else console.log("Tabla borrada");
// })

// let sql = "ALTER TABLE Alumnos ADD COLUMN Notas INT"
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else console.log("Columna Creada");
// })

// let sql = "ALTER TABLE Alumnos DROP COLUMN Apellidos";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else console.log("Columna Borrada");
// })

// let sql = "INSERT INTO Alumnos (Nombre, Apellidos2) VALUES (\"Rosa\", \"Robles Palo\")";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Datos Insertados");
//         console.log(result);
//     }
// })


// let sql = "INSERT INTO Profesores2 (Nombre, Apellidos) VALUES (\"Lola\", \"Coloma Alzamora\")";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Datos Insertados");
//         console.log(result);
//     }
// })

// let sql = "INSERT INTO Asignaturas (Título) VALUES (\"Historia\")";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Datos Insertados");
//         console.log(result);
//     }
// })

// let sql = "INSERT INTO Grupos (GrupoNº) VALUES (\"2ºC\")";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Datos Insertados");
//         console.log(result);
//     }
// })


// let sql = UPDATE Notas SET Notas = 0;
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Datos Modificados");
//         console.log(result);
//     }
// })

// let sql = "SELECT Nombre, Apellidos2 FROM Alumnos"
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Selección Realizada");
//         console.log(result);
//         console.log(result[0].Nombre);
//         console.log(result[1].Apellidos2);
//     }
// });

// let sql = "SELECT idProfesores2, Nombre, Apellidos FROM Profesores2"
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Selección Realizada");
//         console.log(result);
        
//     }
// });

// let sql = "DELETE FROM Notas WHERE Fecha < 20110101 ";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Notas borradas");
//         console.log(result);
        
//     }
// });

let sql = "UPDATE Notas SET Notas = 5 WHERE Notas < 5";
connection.query(sql, function(err, result)
{
    if(err)
    console.log(err);
    else
    {
        console.log("Notas actualizadas");
        console.log(result);
        
    }
});
