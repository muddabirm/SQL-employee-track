INSERT INTO department (id,name)
VALUES  (1,"Finance"),
        (2,"Sales"),
        (3,"Accounting"),
        (4,"Marketing"),
        (5,"Management");

INSERT INTO role (id,title,salary,department_id)
VALUES  (1,"Management",25,22),
        (2,"Teller",30,23),
        (3,"Lead",40,24),
        (4,"TeamLead",50,25);

INSERT INTO employee (id,first_name,last_name,role_id,manager_id)
VALUES  (1,"Carl","Marks",10,12),
        (2,"Mason","Shocks",12,23),
        (3,"Jane","Doe",14,22),
        (4,"bob","bobby",7,8);