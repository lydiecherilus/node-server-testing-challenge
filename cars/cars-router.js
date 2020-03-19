const express = require("express")

const db = require("../data/dbConfig")
const Cars = require("./cars-model")

const router = express.Router()

// return a list of all cars in the database
router.get('/', (req, res) => {
  Cars.get()
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get cars' });
    });
});


// return a given car by id
router.get("/:id", async (req, res, next) => {
  try {
    const cars = await db("cars")
      .where("id", req.params.id)
      .first()

    if (!cars) {
      return res.status(404).json({
        message: "Car not found with given id",
      })
    }
    res.json(cars)
  } catch (err) {
    next(err)
  }
})


// add/create a new car
router.post('/', (req, res) => {
  const carData = req.body;

  Cars.add(carData)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create a new car' });
    });
});


// delete a car
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Cars.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find car with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete car" });
    });
});

module.exports = router