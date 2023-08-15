const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    itemID: {type: Number, required: true}
}, {
    timestamps: true
})

const Item = mongoose.model('Item', ItemSchema)
module.exports = Item