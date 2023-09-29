const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
}

type User {
    _id: ID!
    username: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String!
    authors: [String]
    title: String
    description: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

input InputBook {
    authors: [String]
    title: String
    description: String
    image: String
    link: String
}
`;

module.exports = typeDefs;