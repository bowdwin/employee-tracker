  
INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
("Keith", "Beaudoin", 1, 1), ("Bonjovi", "John", 2, 1), ("Katy", "Hladki", 3, 2), ("Billo", "Jon", 4, 2), ("Katy", "Hladki", 3, 3);

INSERT INTO roles
(title, salary, department_id)
VALUES
("Business Analyst", 70000, 1), ("Lead Engineer", 100000, 1), ("Treasury Analyst", 120000, 2), ("Salesperson", 85000, 3);

INSERT INTO departments
(department)
VALUES
("Engineering"), ("Treasury"), ("Sales");