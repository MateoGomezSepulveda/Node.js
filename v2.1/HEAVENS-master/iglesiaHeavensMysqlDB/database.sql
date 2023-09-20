CREATE DATABASE Heavens;

USE Heavens;

CREATE TABLE Creyentes(
    idCreyente INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    nroCelular VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    idBarrio INT,
    FOREIGN KEY (idBarrio) REFERENCES Barrios(idBarrio)
);

CREATE TABLE Barrios(
    idBarrio INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreBarrio VARCHAR(50),
    idComuna INT,
    FOREIGN KEY (idComuna) REFERENCES Comunas(idComuna)
);
CREATE TABLE Comunas(
    idComuna INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreColumna VARCHAR(50),
    idMunicipio INT,
    FOREIGN KEY (idMunicipio) REFERENCES Municipios(idMunicipio)
);

CREATE TABLE Municipios(
    idMunicipio INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreMunicipio VARCHAR(50) NOT NULL,
    idDepartamento INT,
    FOREIGN KEY (idDepartamento) REFERENCES Departamentos(idDepartamento)   
);

CREATE TABLE Departamentos(
    idDepartamento INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombreDepartamento VARCHAR(50) NOT NULL
);