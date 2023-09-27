import { gql } from '@apollo/client';

const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
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

module.export = GET_ME