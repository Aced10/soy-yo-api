const router = require("express").Router();
const entitiesController = require("../controllers/entitiesController.js");

// Retrieve entities lsit order alpha
router.post("/entities/filter", entitiesController.filterEntities);

module.exports = router;
