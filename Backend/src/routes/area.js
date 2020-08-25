/**
 * Desarrollador: Donaldo Parra
 * Fecha: 24/08/2020
 */
const express = require('express');
const cors = require('cors');
const route = express.Router();
const mysqlConnection = require('../database');

//ruta inicial para tener los datos de las areas
route.get('/areas', (req, res) => {
    //consulta de las áreas a través de un sp (stored procedure) #ListarAreas
    mysqlConnection.query('CALL ListarAreas()', (err, rows, fields) => {
        if (!err) {
          console.log(rows);
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});


//ruta inicial para tener los datos de las areas
route.get('/area/:id', (req, res) => {
  const {id} = req.params;
  //consulta de las áreas a través de un sp (stored procedure) #ListarAreas
  mysqlConnection.query('SELECT * FROM areas where id=' +id, (err, rows, fields) => {
      if (!err) {
        console.log(rows);
          res.json(rows);
      } else {
          console.log(err);
      }

  });
});

//Ruta para Registro de Areas
route.post('/area', cors(), (req, res) => {
    //ingreso de las áreas a través de un sp (stored procedure) #RegistrarAreas
    const { Nombre, Estado, Lider } = req.body;
    const query = `CALL RegistrarAreas (?, ?, ?)`;
    mysqlConnection.query(query, [Nombre, Estado, Lider], (err, rows, fields) => {
        if (err) return res.json(err);
        return res.json({ status: 'Área Registrada con Exito!' })
    })
});


//Ruta para eliminar Areas
route.delete('/areaeliminar/:id', cors(), (req, res) => {
  //Eliminación de las áreas a través de un sp (stored procedure) #ListarAreas
  const { id } = req.params;
  console.log(id);
  const query = `CALL EliminarArea (?)`;
  mysqlConnection.query(query, [id], (err, rows, fields) => {
      if (err) return res.json(err);
      return res.json({ status: 'Área Eliminada con Exito!' })
  })
});


//Ruta para actualizar Areas
route.put('/areaactualizar/:id', cors(), (req, res) => {
  //Actualización de las áreas a través de un sp (stored procedure) #ActualizarAreas  
  const { id, Nombre, Estado, Lider } = req.body;
  const query = `CALL ActualizarAreas (?,?,?,?)`;
  mysqlConnection.query(query, [id, Nombre, Estado, Lider], (err, rows, fields) => {
      if (err) return res.json(err);
      return res.json({ status: 'Area Eliminada con Exito!' })
  })
});

module.exports = route;