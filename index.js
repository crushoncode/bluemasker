const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

const mask = require('./db/masks.json')

app.use('/', (req, res) => {
    res.status(200).json(mask)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})