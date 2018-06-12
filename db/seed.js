const Mask = require('../masks/Mask')
const maskJson = require('./masks.json')
const mongoose = require('./connection')

const masks = maskJson.map(mask => {
    mask.price = parseInt(mask.price, 10)
    return new Mask(mask)
})

async function seedMasks() {
    await Mask.remove({})
    await Mask.insertMany(masks)
    await Mask.findModel('level1')
    console.log('processed successfully in mongodb')
}

seedMasks()
.then(() => mongoose.connection.close())
.catch(err => console.error(err))