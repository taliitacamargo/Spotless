
const { Schema, model } = require('mongoose');


const calendarSchema = new Schema({
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
    }
});


const Calendar = model('Calendar', calendarSchema);


module.exports = Calendar;
// Compare this snippet from Spotless/server/models/Event.js: