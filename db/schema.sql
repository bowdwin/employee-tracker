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

CREATE TABLE role(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(30),
  department_id INT(10),
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT(10),
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id)
    -- seems to be error with below
  -- FOREIGN KEY (manager_id) REFERENCES employee(id)
);