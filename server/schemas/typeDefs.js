const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
    events: [Event]
    # bookings: [Booking]
  }



  type Event {
    _id:ID!
    title: String!
    description: String!
    date: String!
    creator: Profile
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  input EventInput {
    title: String!
    description: String!
    date: String!
}

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    events: [Event!]!
    # bookings: [Booking!]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createEvent(event: EventInput) : Event
    # bookEvent(eventId: ID!): Booking!
    # cancelBooking(bookingId: ID!): Event!
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
    removeEvent(eventId: ID!): Event
  }


`;

module.exports = typeDefs;
