const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let GameSchema = new Schema({
    moves: [{
        squares: []
    }]
});

module.exports = mongoose.model('Game', GameSchema);