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
    // this is coming from googles book api
    authors: [String]
    title: String
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;