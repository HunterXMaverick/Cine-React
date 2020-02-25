drop database cine;

create database cine;
use cine;

create table Personas(
id int auto_increment not null primary key, 
nombre varchar(150), 
correo varchar(150), 
clave varchar(150)
);

create table Peliculas(
id int auto_increment not null primary key, 
titulo varchar(150), 
resumen varchar(150), 
categoria char (150), 
valorBoleto char(150), 
imagen text, 
estado boolean
);

create table Horarios(
id int auto_increment not null primary key, 
hora varchar(100)
);

create table Salas(
id int auto_increment not null primary key, 
nombre varchar(150), 
descripcion varchar(150)
);

create table SalaPeliculas(
id int auto_increment not null primary key,
idpelicula int not null, 
idsala int not null, 
idhorario int not null, 
foreign key (idsala) references Salas(id) ON DELETE CASCADE,
foreign key (idpelicula) references Peliculas(id) ON DELETE CASCADE,
foreign key (idhorario) references Horarios(id) ON DELETE CASCADE
);

create table Compras(
id int auto_increment not null primary key, 
numeroBoleto varchar(150), 
idpersona int, 
idsala_peliculas int, 
foreign key (idpersona) references Personas(id) ON DELETE CASCADE,
foreign key (idsala_peliculas) references SalaPeliculas(id) ON DELETE CASCADE
);
