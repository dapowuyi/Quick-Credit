CREATE DATABASE quick_credit;

CREATE TABLE users(
    /*name data_type constraint key_type initializers*/
    id SERIAL NOT NULL PRIMARY KEY,                     /* serial is like int auto increment*/
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL UNIQUE
);

--creat INSERTS
--BEST PRACTICES

INSERT INTO users (first_name,last_name,email,password) values ('', '', '', '');

--BEST 
--You limit what you want and think about it's usefulness
SELECT first_name, last_name from USERS 
--SELECT first_name, last_name from USERS WHERE ........UNIQUE

