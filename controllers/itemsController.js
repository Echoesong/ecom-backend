const { Item } = require("../models");

async function index(req, res, next) {
  try{
    res.status(200).json(await Item.find())
  } catch(err){
    res.status(400).json({error: err.message })
  }
}

async function create(req, res, next) {
    try {
      const itemData = req.body;
      res.status(201).json(await Item.create(itemData));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  

async function details(req, res, next) {
  res.status(200).json(await Item.findById(req.params.id));
}

async function destroy(req, res, next) {
  res.status(200).json(await Item.findByIdAndRemove(req.params.id));
}

module.exports = {
  create,
  index,
  getOne: details,
  delete: destroy,
};
