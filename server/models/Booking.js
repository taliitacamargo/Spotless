const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
},
    { timestamps: true }

);
const Booking = model('Booking', bookingSchema);

module.exports = Booking;
