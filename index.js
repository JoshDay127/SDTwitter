const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socket = require('socket.io');
const axios = require('axios');
const Twitter = require('twitter-lite');


require('dotenv').config();

//Twitter Imports
const consumer_key = process.env.API; // Add your API key here
const consumer_secret = process.env.API_SECRET; // Add your API secret key here
const twitter_access_token = process.env.ACCESS;
const twitter_token_secret = process.env.ACCESS_SECRET;

//Importing Model
const Tweet = require('./models/Tweet');
const Media = require('./models/Media');


//Executing express
const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;

//Importing Routes
const tweetRoute = require('./routes/tweets');
const userRoute = require('./routes/users');


//Middleware
//Parser
app.use(bodyParser.json());

//Every time request uses directory, use specific route
app.use('/tweets', tweetRoute);
app.use('/users', userRoute);


//Listening
app.listen(port);


//Connect to DB
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('Connected to Database'));



function endStream(stream){
    stream.destroy();
}

function createStream(TwitterApp, params){
    const stream = TwitterApp.stream("statuses/filter", params)
        .on("start", () => console.log("Stream Started"))
        .on("data", tweet =>
        {
            if (tweet.extended_entities) {
                console.log("media")
                medias = []
                tweet.extended_entities.media.forEach(tweet_media => {
                    const media = new Media({
                        url: tweet_media.media_url,
                        type: tweet_media.type
                    })
                    medias.push(media)
                });
                Media.insertMany(medias).then(medias => {
                    Tweet.create({
                        tweet_id: tweet.id_str,
                        text: tweet.text,
                        user_id: tweet.user.id,
                        medias: medias,
                        creation: tweet.created_at,
                    }, err => {
                        if (err) (
                            console.log(err)
                        )
                    });
                })
            } else {
                console.log("No media")
                Tweet.create({
                    tweet_id: tweet.id_str,
                    text: tweet.text,
                    user_id: tweet.user.id,
                    creation: tweet.created_at,
                }, err => {
                    if (err) (
                        console.log(err)
                    )
                });
            }
        })
        .on("error", error => console.log(error))
        .on("end", () => console.log("Stream Ended"));
}

//Twitter Listener
(async () => {

    const twitterApp = new Twitter({
        consumer_key: consumer_key,
        consumer_secret: consumer_secret,
        access_token_key: twitter_access_token,
        access_token_secret: twitter_token_secret
    });

    const parameters = {
        track: "#SurreyDecides",
    }

    createStream(twitterApp, parameters);

    const results = await Tweet.find({});
    console.log(results);

})();