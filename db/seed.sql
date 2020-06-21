  
INSERT INTO employees
(first_name, last_name, role_id, manager)
VALUES
("Keith", "Beaudoin", 1, "Jon Bonjovi"), ("Bonjovi", "John", 2, "Jon Billo"), ("Katy", "Hladki", 3, "Keith Beaudoin"), ("Billo", "Jon", 4, "Katy Hladki"), ("Katy", "Hladki", 3, "Keith Beaudoin");

INSERT INTO roles
(title, salary, department_id)
VALUES
("Business Analyst", 70000, 1), ("Lead Engineer", 100000, 1), ("Treasury Analyst", 120000, 2), ("Salesperson", 85000, 3);

INSERT INTO departments
(department)
VALUES
("Engineering"), ("Treasury"), ("Sales");