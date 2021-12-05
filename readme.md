# Knex.js & Postgres

## Contents

<!-- toc -->

- [Knex.js & Postgres](#knexjs--postgres)
  - [Contents](#contents)
  - [Intro & Resources](#intro--resources)
  - [DB setup](#db-setup)
  - [knexfile.js](#knexfilejs)
  - [Migrations](#migrations)

<!-- tocstop -->

## Intro & Resources

Learning knex.js with postgres & express. There is no FE for this project

- [Youtube tutorial](https://www.youtube.com/watch?v=wfrn21E2NaU)

## DB setup

```bash
# start psql server
sudo su - postgres

# start psql from server (I guess)
# brings up postgres CLI
postgres@ssaquif-thinkpad-t430:~$ psql

# create DB & grant permissions
postgres=# CREATE DATABASE knex_tutorial;
CREATE DATABASE
postgres=# GRANT ALL PRIVILEGES ON DATABASE knex_tutorial to ssaquif;
GRANT
postgres=# \q;

# logout
postgres@ssaquif-thinkpad-t430:~$ logout
```

## knexfile.js

Is basically where you put all your connection info, I put it in my `db` folder

Run following to create it

```bash
npx knex init
# move it to db folder after creation
```

Default file looks like this. Assumes there is a development, staging & a production db.

We want `postgres` for our dev db.

```js
// Default file that is created, uses sqlite for dev db
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
```

## Migrations

Had to run the following command from same folder as where my `package.json` resides

```bash
# named our first migration init
# set default migrations dir to be db/migrations
npx knex migrate:make init --migrations-directory db/migrations
```
