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

    bookings: async () => {
      try {
        const bookings = await Booking.find()
        return bookings.map(booking => {
          return {
            ...booking._doc,
            _id: booking.id,
            createdAt: new Date(booking._doc.createdAt).toISOString(),
            updatedAt: new Date(booking._doc.updatedAtAt).toISOString()
          }
        });
      } catch (err) {
        console.log(err)
        throw err;
      }
    },

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

    createEvent: async (parent, { title, description, date }) => {
      return Event.create({ title, description, date });

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
    bookEvent: async (parent, { profileId, event }) => {
      return Event.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { events: { event } },
        },
          {
          new: true,
          runValidators: true,
        }
      );
    },
  }
}

  module.exports = resolvers;
