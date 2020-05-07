const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Rock Schema and model

const RockSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    type: {
        type: String,
    },
    hardness: {
        type: Number,
    }
});


const Rock = mongoose.model('rock', RockSchema);

module.exports = Rock;