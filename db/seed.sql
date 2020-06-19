use employees;

-- SEED department
INSERT INTO department (name)
VALUES ("Information Tech"),("Human Resources"),
 ("Engineering"),("Operations"),("Marketing");

  -- SEED role
INSERT INTO role (title, salary, department_id)
VALUES ("CIO", 250000, 1),("Engineering Director", 260000, 3),
("HR Analyst", 95000, 2),("Operations Analyst", 90000, 4),
("Marketing Manager", 110000, 5);

 -- SEED employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Keith", "Beaudoin", 1, 1),("Katy", "Hladki", 2, 1),
("Ben", "Watson", 4, 3),("Tom ","Brady",5 , 1),
("Rob", "Gronkowski", 2, 3),("Aaron","Hern",3,1);