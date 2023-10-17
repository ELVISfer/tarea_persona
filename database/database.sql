-- Active: 1691546315151@@127.0.0.1@5432@tarea1@public

CREATE TABLE
    tbl_listado (
        id serial PRIMARY KEY,
        nombre VARCHAR(200),
        apellido varchar(200),
        edad INTEGER,
        fecha DATE,
        finish BOOLEAN DEFAULT false
    );
