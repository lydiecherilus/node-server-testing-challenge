const db = require('../data/dbConfig.js');

module.exports = {
    get,
    getById,
    add,
    remove,
}

function get() {
    return db("cars")
};

function getById(id) {
    return db("cars")
        .where("id", id)
        .first()
}

function add(newCar) {
    return db("cars")
        .insert(newCar)
        .then(([id]) => {
            return getById(id)
        })
}

function remove(id) {
    return db("cars")
        .where({ id })
        .delete()
}