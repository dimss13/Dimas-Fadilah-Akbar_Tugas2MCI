const { db_name } = require("./environment");
const { db_user } = require("./environment");
const { db_pass } = require("./environment");
const { db_host } = require("./environment");
const { db_port } = require("./environment");

module.exports = {
  // "development": {
  //   "username": "root",
  //   "password": null,
  //   "database": "seminar",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  "development": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  },
  "test": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  },
  "production": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  }
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
}
