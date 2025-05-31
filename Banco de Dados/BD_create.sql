drop database if exists violoncelo;

create database violoncelo;

use violoncelo;

create table usuario(
		id int not null auto_increment,
        nome varchar(50),
        sobrenome varchar(50),
        instrumento varchar(50),
        naipe varchar(50),
        email varchar(50),
        senha varchar(50),        
        primary key(id)
);

create table quiz(
		id int not null auto_increment,
        fkusuario int,
        pontuacao int,
        data_hora timestamp default current_timestamp,
        foreign key (fkusuario) references usuario(id),
        primary key (id)
);