/**
 * Desarrollador: Donaldo Parra
 * Fecha: 24/08/2020
 */
const express = require('express');
const cors = require('cors');
const route = express.Router();
// Llamado de la conexión para hacer uso de la base de datos
const mysqlConnection = require('../database');

//ruta inicial para tener los datos
route.get('/Usuarios', (req, res) => {
    //consulta de los usuarios a través de un sp (stored procedure) #ListarUsuarios
    mysqlConnection.query('CALL ListarUsuarios()', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});

//Registro de Usuarios
route.post('/Usuario', cors(), (req, res) => {
    //ingreso de los usuarios a través de un sp (stored procedure) #RegistrarUsuario
    const { Nombres, Apellidos, Fecha_Nacimiento, Email, Numero_Documento, Salario, Estado, IdArea} = req.body;
    console.log(Nombres, Apellidos, Fecha_Nacimiento, Email, Numero_Documento, Salario, Estado, IdArea);
    const query = `CALL RegistrarUsuario (?, ?, ?, ?, ?, ?, ?, ?)`;
    mysqlConnection.query(query, [Apellidos, Fecha_Nacimiento, Email, Numero_Documento, Salario, Estado, IdArea], (err, rows, fields) => {
        if (err) return res.json(err);
        return res.json({ status: 'Usuario Registrado con Exito!' })
    })
});

//Ruta para Actualizar Usuarios
route.put('/UsuarioActualizar', cors(), (req, res) => {
  //Actualización de los usuarios a través de un sp (stored procedure) #ActualizarUsuario
  const {id, Nombres, Apellidos, Fecha_Nacimiento, Email, Numero_Documento, Salario, Estado, IdArea} = req.body;
  const query = `CALL ActualizarUsuario (?,?,?,?,?,?,?,?,?)`;
  mysqlConnection.query(query, [id, Nombres, Apellidos, Fecha_Nacimiento, Email, Numero_Documento, Salario, Estado, IdArea], (err, rows, fields) => {
      if (err) return res.json(err);
      return res.json({ status: 'Usuario Actualizado con Exito!' })
  })
});

//Ruta para Eliminar Usuarios
route.delete('/UsuarioEliminar/:id', cors(), (req, res) => {
  //Eliminación de los usuarios a través de un sp (stored procedure) #EliminarUsuario
  const {id} = req.params;
  const query = `CALL EliminarUsuario (?)`;
  mysqlConnection.query(query, [id], (err, rows, fields) => {
      if (err) return res.json(err);
      return res.json({ status: 'Usuario Eliminado con Exito!' })
  })
});

module.exports = route;