const express = require('express')
const router = express.Router();
const Tweet = require('../models/Tweet');

//Requests do not require /tweets prefix - specified in index.js

router.post('/add', (req,res) => {
    const media_url = [];
    const newTweet = new Tweet({
        _id: req.body.id,
        text: req.body.text,
        user_id: req.body.user.id,
        media_url: req.body.entities.media.forEach(media => media_url.push(media.media_url)),
        creation: req.body.created_at,
    });
    newTweet.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.json({msg: err});
        });
});

module.exports = router;