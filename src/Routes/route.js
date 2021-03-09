const route = require("express").Router();

/**
 * Database of pets
 */
const pets = [
  {
    id: 1,
    name: "Logo",
    tag: "Dog",
  },
  {
    id: 2,
    name: "Lily",
    tag: "Cat",
  },
  {
    id: 3,
    name: "Milly",
    tag: "Snake",
  },
  {
    id: 4,
    name: "Ace",
    tag: "Dog",
  },
  {
    id: 5,
    name: "Danger",
    tag: "Dog",
  },
];

/**
 * List all pets
 */
const listPets = async (req, res, next) => {
  const result = pets.slice(0, req.query["limit"]);

  return res.json(result);
};
/**
 * Create a pet
 */
const createPets = async (req, res, next) => {
  pets.push(req.body);

  return res.json(req.body);
};
/**
 * Info for a specific pet
 */
const showPetById = async (req, res, next) => {
  const index = pets.findIndex((p) => p.id == req.params["petId"]);

  return res.json(pets[index]);
};

route.get("/:petId", showPetById);
route.post("/", createPets);
route.get("/", listPets);

module.exports = route;