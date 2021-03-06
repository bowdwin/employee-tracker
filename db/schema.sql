DROP DATABASE IF exists employees;
CREATE DATABASE employees;

USE EMPLOYEES;

-- create 3 different table 
-- * **department**:
CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT (30),
manager_id INT (30),
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL(10,2),
department_id INT,
PRIMARY KEY (id)
);

CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT,
department VARCHAR(30),
PRIMARY KEY (id)
);