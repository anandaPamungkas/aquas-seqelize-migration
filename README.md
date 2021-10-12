# Aquas Sequelize Migration

Databse migration for Aquas App

## Description
Database migration using Sequelize based on NodeJs

## Getting Started

### Software Requirement

* NodeJs
* Sequelize CLI
* MySql

### Instalation and Execution

* make a new database "aquas-app"

* install sequelize cli using this command "npm install sequelize-cli -g"

* do the migration using this command "sequelize db:migrate"

* add data into the database table using this command "npx sequelize db:seed:all"

* add new administrator manually to administrator table, for the password column at administrator table encrypt it with bcrypt
