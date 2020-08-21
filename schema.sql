DROP DATABASE IF EXISTS workout;

CREATE DATABASE workout;

USE workout;

CREATE TABLE workout1 (
  name varchar(50),
  workoutPlan varchar(50),
  workoutDate varchar(50),
  workout1 varchar(500),
  workout2 varchar(500),
  workout3 varchar(500),
  workout4 varchar(500),
  workout5 varchar(500),
  workout6 varchar(500),
  workout7 varchar(500),
  notes varchar(1000)
);

CREATE TABLE templates (
  name varchar(50),
  templateName varchar(50),
  workout1 varchar(500),
  workout2 varchar(500),
  workout3 varchar(500),
  workout4 varchar(500),
  workout5 varchar(500),
  workout6 varchar(500),
  workout7 varchar(500)
);

CREATE TABLE usersAndPasses (
  name varchar(50),
 password varchar(50)
);

--  Execute this file from the command line by typing:
--    mysql -u <USER> < schema.sql
--    OR
--    mysql -u <USER> -p < schema.sql        <---- this one for me

