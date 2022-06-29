const { AuthenticationError } = require('apollo-server-express');
const { Profile, Booking, Event } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {

    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    // bookings: async () => {
    //   return Booking.find()
    // },

  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    createEvent: async (parent, { title, description,date }) => {
      console.log('made it to event', title, description, date);
    const event = await Event.create({ title, description, date, });

    return event;
    
    },

    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },

    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },

    removeEvent: async (parent, { eventId }) => {
      return Event.findOneAndDelete({ _id: eventId });
    }
  },

  // Profile: {
  //   bookings: async (parent) => {
  //     return Booking.find({ profile: parent._id });
  //   }
  // }
};


    // bookEvent: async (parent, { profileId, event }) => {
    //   return Event.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { events: { event } },
    //     },
    //       {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },


  module.exports = resolvers;
