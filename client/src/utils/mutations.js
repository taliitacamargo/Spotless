import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';




export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation createEvent($date: String!, $time: String!, $title: String!, $description: String!, $location: String!) {
    createEvent(date: $date, time: $time, title: $title, description: $description, location: $location) {
      _id
      date
      time
      title
      description
      location
    }
  }
`;



export const GET_EVENTS = gql`
  query getEvents {
    getEvents {
      _id
      date
      time
      title
      description
      location
    }
  }
`;

export const GET_PROFILE = gql`
  query getProfile {
    getProfile {
      _id
      name
      email
      skills
    }
  }
`;

export const GET_SKILLS = gql`
  query getSkills {
    getSkills {
      _id
      name
      skills
    }
  }
`;

export const GET_SKILL = gql`
  query getSkill($id: ID!) {
    getSkill(id: $id) {
      _id
      name
      skills
    }
  }
`;

export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    getEvent(id: $id) {
      _id
      date
      time
      title
      description
      location
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($id: ID!, $name: String!, $email: String!, $password: String!) {
    updateProfile(id: $id, name: $name, email: $email, password: $password) {
      _id
      name
      email
      skills
    }
  }
`;

export const UPDATE_SKILL = gql`
  mutation updateSkill($id: ID!, $skill: String!) {
    updateSkill(id: $id, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation updateEvent($id: ID!, $date: String!, $time: String!, $title: String!, $description: String!, $location: String!) {
    updateEvent(id: $id, date: $date, time: $time, title: $title, description: $description, location: $location) {
      _id
      date
      time
      title
      description
      location
    }
  }
`;


