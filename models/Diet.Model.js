const mongoose = require('mongoose');

// Define diet chart schema
const Diet_Model = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Meals: {
        type: [{
            name: String,
            description: String,
            calories: Number
        }],
        required: true
    },
    // You can add more fields as needed
});

// Create diet chart model
const DietChart = mongoose.model('DietChart', Diet_Model);

module.exports = DietChart;
