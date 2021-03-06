const { Schema, model } = require('mongoose');


const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
    },
});

const Event = model('Event', eventSchema);

module.exports = Event;