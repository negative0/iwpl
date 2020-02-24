create database db;
use database db;

create table users(id INT PRIMARY KEY AUTO_INCREMENT, username VARCHAR(20), password VARCHAR(100));
insert into users (username, password) VALUES("chaitanya", password("hello"))
insert into users (username, password) VALUES("bhum", password("hello"))