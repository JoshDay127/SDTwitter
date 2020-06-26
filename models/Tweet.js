const mongoose = require('mongoose');

//Creating Schema
const TweetSchema = mongoose.Schema({
    tweet_id: {
        type: String,
        required: true
    },
    text: String,
    user_id: Number,
    medias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media'
    }],
    creation: String,
    approved: {
        type: Boolean,
        default: false
    },
    pushed: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model('Tweet', TweetSchema);