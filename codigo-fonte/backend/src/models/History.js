const mongoose = require("mongoose");

const { Schema } = mongoose;

const historySchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        workoutId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workout',
            required: true
        },
    },
    { timestamps: true }
);

const History = mongoose.model("History", historySchema);

module.exports = {
    History,
    historySchema,
};
