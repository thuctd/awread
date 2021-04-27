import { gql } from 'apollo-angular';

const queryBooksFragment = gql`
  fragment booksFragment on Book {
    bookId
    title
    description
    published
    updatedAt
    completed
  }
`;
