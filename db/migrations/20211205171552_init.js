exports.up = function (knex) {
  return knex.schema.createTable("person", (table) => {
    // creating id field which should auto increment,
    // ideally use something like uuid instead
    table.increments("id");
    table.string("email").notNullable().unique();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    // have timestamp for creation and updates of table/records
    // typically we also want add who updated it
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("person");
};
