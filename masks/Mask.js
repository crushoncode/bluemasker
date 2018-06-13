const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const maskSchema = new Schema({
    model: String,
    size: String,
    color: String,
    logo: String,
    img: String,
    price: Number
})

maskSchema.statics.findModel = function(model) {
    return this.find({ model: model })
}

const Mask = mongoose.model('Mask', maskSchema)

module.exports = Mask