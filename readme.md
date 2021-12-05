# Knex.js & Postgres

## Contents

<!-- toc -->

- [Knex.js & Postgres](#knexjs--postgres)
  - [Contents](#contents)
  - [Case Sensitivity Reminder](#case-sensitivity-reminder)
  - [Intro & Resources](#intro--resources)
  - [DB setup](#db-setup)
  - [knexfile.js](#knexfilejs)
  - [Migrations](#migrations)
    - [Create Migration File, `knexfile.js`](#create-migration-file-knexfilejs)
    - [File Anatomy](#file-anatomy)
    - [Running Migrations](#running-migrations)
    - [Migration Tables](#migration-tables)

<!-- tocstop -->

## Case Sensitivity Reminder

> `Important:` With Databases always use underscores (snake case) when for naming purposes, never Pascal/Camel Case. Cause sometimes DBs can be case insensitive and that can cause tons of issues. I think camel case in nosql document keys are fine though.

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

For the titroal we will have a very simple migration with 1 table, person

### Create Migration File, `knexfile.js`

Had to run the following command from same folder as where my `package.json` resides

```bash
# named our first migration init
# set default migrations dir to be db/migrations
npx knex migrate:make init --migrations-directory db/migrations
```

### File Anatomy

Gives you 2 functions

```js
// up applies the migration
exports.up = function (knex) {};
// down undoes the migration
exports.down = function (knex) {};
```

### Running Migrations

Run it from the root of the project where my `package.json` and `.env` files are located

```bash
# migrate:latest means it will check the DB
# check which migrations have already run
# & then if it is not there, it will run it
# finally specify where the knexfile is using the switch, --knexfile
npx knex migrate:latest --knexfile db/knexfile.js
```

> `Important:` When we run migrations as above, the working dir changes as shown in the terminal msg

```bash
Working directory changed to ~/Programming/Database-Projects/knex-postgres/db
Using environment: development
Batch 1 run: 1 migrations
```

So I updated the path to the `.env` file for the `dotenv` package in the `knexfile.js`

```js
require("dotenv").config({ path: "../.env" });
```

### Migration Tables

In addition to the `person` table created by this example, migrations also create 2 more tables

1. knex_migrations
2. knex_migrations_lock
