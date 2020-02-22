const express = require('express');
const router = express.Router();
const nuggut = require('../models/nuggut');

router.get('/nuggut', (req, res, next) => {
		nuggut
		.find({}, 'item')
		.then(data => res.json(data))
		.catch(next)
});

router.post('/nuggut', (req, res, next) => {
    if (req.body.item) {
        nuggut
            .create(req.body)
            .then(data => res.json(data))
            .catch(next);
    }
    else {
        res.json({ error: "The item field is empty" })
    }
});

router.delete('/nuggut/:id', (req, res, next) => {
    nuggut.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;