const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const maskRouter = require('./masks/maskRouter')
const PORT = process.env.PORT || 3000


const mask = require('./db/masks.json')

app.use(bodyParser.json())
app.use('/', maskRouter)
// app.use('/', (req, res) => {
//     res.status(200).json(mask)
// })


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})