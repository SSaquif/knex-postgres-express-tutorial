// the env file is placed in the root folder of the project
// ie the same folder as the package.json file
const dotenv = require("dotenv");

console.log(process.cwd());

if (process.cwd().includes("/db")) {
  dotenv.config({ path: "../.env" });
} else {
  dotenv.config();
}

const { POSTGRES_DB, POSTGRES_PASS, POSTGRES_USER } = process.env;
console.log(POSTGRES_DB, POSTGRES_PASS, POSTGRES_USER);

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
