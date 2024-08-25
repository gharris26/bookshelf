/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('cover_image')
    table.text('description')
    table.text('review')
  })
}

export const down = function (knex) {
  return knex.schema.dropTable('books')
}
