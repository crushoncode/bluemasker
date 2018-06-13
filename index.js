const express = require('express')
const bodyParser = require('body-parser')
const Mask = require('./masks/Mask')
const app = express()
const PORT = process.env.PORT


app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    Mask.find()
    .then(masks =>  {
        res.render('index.ejs', {masks: masks})
        // res.status(200).json(masks)
    }) 
    .catch(err => {
        res.status(500).json({error: err.message})
    })
    // res.sendFile(__dirname + '/index.html')
})

app.post('/masks', (req, res) => {
    const mask = new Mask(req.body)
    if (req.body.size == 'kid') {
        if (req.body.model == 'level1') { 
            mask.price = 500
        }
        else {
            mask.price = 1000
        }
    }
    else {
        if (req.body.model == 'level1') { 
            mask.price = 1000
        }
        else {
            mask.price = 1500
        }
    }

    mask.save()
    .then(() =>  {
        // res.redirect('/')
        res.status(201).json(mask)
    })
    .catch(err => {
        res.status(500).json({err: err.message})
    })
    
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

