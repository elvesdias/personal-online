const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    programId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Program',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    day: {
        type: String
    },
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
});

module.exports = mongoose.model('Workout', workoutSchema);
