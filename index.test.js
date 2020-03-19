const supertest = require('supertest')
const server = require('./index')
const db = require('./data/dbConfig')

// test welcome message
test('main route', async () => {
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Node Server Testing Challenge")

})