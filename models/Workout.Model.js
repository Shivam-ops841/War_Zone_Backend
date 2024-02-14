const mongoose = require('mongoose');

// Define workout schema
const Workout_Model = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Duration: {
        type: Number,
        required: true
    },
    Exercises: {
        type: [String],
        required: true
    },
    // You can add more fields as needed
});

// Create workout model
const Workout = mongoose.model('Workout', Workout_Model);

module.exports = Workout;
