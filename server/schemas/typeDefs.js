const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedbooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }
  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookInput: BookInput! ):User
    updateUser(username: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    removeBook(bookId: ID):User
  }
`;

module.exports = typeDefs;
