import { gql } from '@apollo/client';

const LOGIN_USER = gql`
    mutations login(
        $email: String!
        $password: String!
    ) {
        login(
            email: $email
            password: $password
        ) {
            token
            user {
                _id
                username
            }
        }
    }
`;

const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            username: $username
            email: $email
            password: $password
        ){
            token
            user {
                _id
                email
                bookCount
                savedBooks {
                    bookId
                    authors
                    description
                    title
                    image
                    link
                }
            }
        }
    }
`;

const SAVE_BOOK = gql`
    mutation saveBook($newBook: InputBook!) {
        saveBook(newBook: $newBook) {
            _id
            username 
            email
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }

    }
`;

const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username 
            email
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;



module.export = { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK }

// I could have set this up with export const for each instead of const and then export at the bottom. This makes more sense for me and I am able to keep this cleaner