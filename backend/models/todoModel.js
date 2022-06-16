const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        // required: [true, 'Please add a text value'] 
    },
}, { 
    timeStamps: true
});


module.exports = mongoose.model('Todo', todoSchema);