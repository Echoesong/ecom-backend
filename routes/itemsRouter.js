const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/itemsController')


// INDEX
router.get("/", itemsController.index);
// CREATE
router.post('/', itemsController.create)
// SHOW/DETAILS
router.get("/:id", itemsController.getOne);
// DELETE
router.delete("/:id", itemsController.delete);

module.exports = router

