const express = require('express')
const Mask = require('./Mask')
const router = express.Router()


router.get('/', (req, res) => {  
    Mask.find()
    .then(masks =>  {
        res.status(200).json(masks)
    }) 
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    const mask = new Mask(req.body)
    mask.save()
    .then(() =>  {
        res.status(201).json(mask)
    })
    .catch(err => {
        res.status(500).json({err: err.message})
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const mask = await Mask.find(id)
        res.status(200).json(mask)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id 
    Mask.delete(id)
    .then(() => {
        res.status(204).json({
            deleted: true
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        })
    })
})

module.exports = router