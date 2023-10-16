const express = require('express');
const app = express();
const db = require('../database/conn');

app.get('', async (req, res) => {
    let sql = `SELECT * FROM tbl_listado ORDER BY id ASC`;
    const result = await db.query(sql);
    res.json(result);
});

app.post('', async (req, res) => {
    const { nombre, apellido, edad, fecha } = req.body;
    const params = [nombre, apellido, edad, fecha];
    let sql = `INSERT INTO tbl_listado (nombre, apellido, edad, fecha) VALUES ($1, $2, $3, $4) RETURNING *`;
    const result = await db.query(sql, params);
    res.json(result);
});

app.put('/:id', async (req, res) => {
    const { nombre, apellido, edad, fecha, finish } = req.body;
    const id = req.params.id;
    const params = [nombre, apellido, edad, fecha, finish, id];
    let sql = `UPDATE tbl_listado 
               SET nombre = $1, apellido =$2, edad = $3, fecha_ingreso = $4, finish = $5
               WHERE id = $6
               RETURNING *`;
    const result = await db.query(sql, params);
    res.json(result);
});

app.put('/finalTarea/:id', async (req, res) => {
    const id = req.params.id;
    const params = [id];
    let sql = `UPDATE tbl_listado 
               SET finish = true
               WHERE id = $1
               RETURNING *`;
    const result = await db.query(sql, params);
    res.json(result);
});

app.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const params = [id];
    let sql = `DELETE FROM tbl_listado 
               WHERE id = $1
               RETURNING *`;
    const result = await db.query(sql, params);
    res.json(result);
});

module.exports = app;