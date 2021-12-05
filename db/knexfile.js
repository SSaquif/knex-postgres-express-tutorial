// the env file is placed in the root folder of the project
// ie the same folder as the package.json file
require("dotenv").config({ path: "../.env" });

const { POSTGRES_DB, POSTGRES_PASS, POSTGRES_USER } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: POSTGRES_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASS,
    },
    // min 2, max 10 connections
    pool: {
      min: 2,
      max: 10,
    },
    // migrations allows for systematic schema upgrade as it evolves
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
