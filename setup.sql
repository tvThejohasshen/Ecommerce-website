CREATE USER 'singschool'@'%' IDENTIFIED WITH mysql_native_password BY 'college';

grant all privileges on *.* to 'singschool'@'%';

FLUSH PRIVILEGES;

CREATE DATABASE singschool;