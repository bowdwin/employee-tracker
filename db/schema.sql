DROP DATABASE IF exists employees;
CREATE DATABASE employees;

USE EMPLOYEES;

-- create 3 different table 
-- * **department**:
CREATE TABLE department(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);
--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name

-- * **role**:
CREATE TABLE role(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(30),
  department_id INT(10),
  PRIMARY KEY (id)
);
--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:
CREATE TABLE employee(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT(10),
  PRIMARY KEY (id)
);
--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manage