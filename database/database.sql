-- Active: 1691546315151@@127.0.0.1@5432@tarea1@public

create table
    tbl_persona_de_Adm (
        id serial PRIMARY key,
        nombre varchar(200),
        apellido varchar(200),
        finish BOOLEAN DEFAULT false
    );

CREATE TABLE
    tbl_listado (
        id serial PRIMARY KEY,
        nombre VARCHAR(200),
        apellido varchar(200),
        edad INTEGER,
        fecha DATE,
        finish BOOLEAN DEFAULT false
    );