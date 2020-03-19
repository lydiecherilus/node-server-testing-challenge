
exports.up = async function (knex) {
    await knex.schema.createTable('cars', table => {
        table.increments();
        table.text('name').notNullable().unique()
        table.integer('year').notNullable()
        table.text('make').notNullable()
        table.text('model')
        table.text('color')
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('cars')
};
