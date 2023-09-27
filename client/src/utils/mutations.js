import { gql } from '@apollo/client';

const LOGIN_USER = gql`

`;

const ADD_USER = gql`

`;

const SAVE_BOOK = gql`

`;

const REMOVE_BOOK = gql`

`;



module.export = { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK}

// I could have set this up with export const for each instead of const and then export at the bottom. This makes more sense for me and I am able to keep this cleaner