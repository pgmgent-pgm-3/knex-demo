const tableName = "TABLENAME";

export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        
    });
}

export function down(knex) {
    return knex.schema.dropTable(tableName);
}