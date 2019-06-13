const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let GameSchema = new Schema({
    move: {type: Number, required: true},
    squares: {type: Array, required: true, max: 9}
});

module.exports = mongoose.model('Game', GameSchema);