const { gql } = require('apollo-server-express');
const typeDefs = gql `
    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        saveBooks: [Book]
    }
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String!
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
    }`

module.exports = typeDefs;