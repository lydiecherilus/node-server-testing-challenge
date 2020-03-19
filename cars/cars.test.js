const db = require('../data/dbConfig');
const carsModel = require("./cars-model");

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

// test insert a car
test("insert", async () => {
    const res = await carsModel.add({
        name: "porche",
        year: "2020",
        make: "Taycan",
        color: "Silver"
    })
    expect(res.name).toBe("porche")
    expect(res.make).toBe("Taycan")
    expect(res.color).toBe("Silver")
})


// test delete a car
test("remove", async () => {
    await carsModel.remove(1)
    const cars = await db("cars").select()
    expect(cars).toHaveLength(0)
})