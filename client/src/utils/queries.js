import gql from 'graphql-tag';


export const QUERY_ME = gql`
{
  user {
    _id
    username
    email
    savedbooks {
        bookId
        authors
        image
        description
        title
        link
    }
  }
}
`;