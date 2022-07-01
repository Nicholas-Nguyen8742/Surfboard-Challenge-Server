/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable().unique();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable("topics", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("ETA").notNullable();
        table.string("description").notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table
            .integer("sponsorID")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("topics")
    .dropTable("users");
};
