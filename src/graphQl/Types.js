import { gql } from 'apollo-server';

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # type 
  type User {
    _id: ID!
    username: String!
    password: String!
  }

  input UserInput{
    username: String!
    password: String!
  }

  type Schedule{
      _id: ID!
      name: String!
      user: User
  }

  input ScheduleInput{
    name: String!
    user: ID
  }

  type Contact{
      _id: ID!
      name: String!
      number: String!
      schedule: Schedule
  }

  input ContactInput{
    name: String!
    number: String!
    schedule: ID
  }

  # The "Query" 
  type Query {
    users: [User]
    schedules: [Schedule]
    contacts: [Contact]
    user(input: String!): User
    schedule(input: String!): Schedule
    contact(input: String!): Contact
    SchedulesUserId(input: String!): [Schedule]
    ContactsScheduleId(input: String!): [Contact]
  }

  # The "Mutation"
  type Mutation{
      createUser(input: UserInput): User
      createSchedule(input: ScheduleInput): Schedule
      createContact(input: ContactInput): Contact
      deleteUser(input: String!): User
      deleteSchedule(input: String!): Schedule
      deleteContact(input: String!): Contact 
  }

`;