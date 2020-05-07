const mongoose = require('mongoose');
const schema = mongoose.Schema

// Create Rock Schema and model

const RockSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    type: {
        type: String,
    },
    hardeness: {
        type: Number,
    }
});


const Rocks = mongoose.model('ninja', NinjaSchema);