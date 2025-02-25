const tableName = "TABLENAME";

export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments("id").primary();
        table.string("firstName").notNullable();
        table.string("lastName").notNullable();
        table.string("bio").notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable(tableName);
}