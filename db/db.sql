CREATE DATABASE crudnodejsmysql;

USE crudnodejsmysql;

-- CREAR LAS TABLAS
CREATE TABLE customer(
	id INT(6) unsigned auto_increment primary KEY,
    name	varchar(50) NOT NULL,
    address	varchar(100) NOT NULL,
    phone	varchar(15)
);

-- MOSTRAS LAS TABLAS
show tables;

-- PARA DESCRIBIR LA TABLA
describe customer; 