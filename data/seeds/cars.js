exports.seed = async function (knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
    { name: "Ferrari", year: 2020, make: "812 Superfast", model: "", color: "Red" }
  ]);
};