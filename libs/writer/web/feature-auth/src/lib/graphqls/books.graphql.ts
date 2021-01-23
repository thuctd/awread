import { gql } from 'apollo-angular';

const queryBooksFragment = gql`
  fragment booksFragment on Books {
    bookid
    title
    img
    description
    completed
    status
    publishedat
    updatedat
  }
`;
export const CREATE_BOOK_MUTATION = gql`
  mutation createBook(
    $bookid: String!
    $userid: String!
    $title: String!
    $categoryid: String!
    $description: String
    $tags: [String]
    $genres: [GenreInput]
    $status: BookStatus
    $completed: Boolean
    $updatedat: Datetime
    $publishedat: Datetime
  ) {
    createBook(
      input: {
        book: {
          bookid: $bookid
          userid: $userid
          title: $title
          description: $description
          tags: $tags
          status: $status
          completed: $completed
          updatedat: $updatedat
          publishedat: $publishedat
          categoryid: $categoryid
        }
      }
    ) {
      book {
        bookid
        title
        img
        description
        completed
        status
        publishedat
        updatedat
        categoryByCategoryid {
          categoryid
          name
        }
        chaptersByBookid {
          totalCount
          nodes {
            chapterid
            title
            status
            updatedat
            publishedat
          }
        }
      }
    }

    createUserBook(
      input: {
        userBook: {
          userid: $userid
          bookid: $bookid
          publishedat: $publishedat
        }
      }
    ) {
      userBook {
        bookid
      }
    }
    insertBookGenre(input: { genres: $genres, bookid: $bookid }) {
      bookid
    }
  }
`;
export const EDIT_BOOK_MUTATION = gql`
  mutation updateBook(
    $bookid: String!
    $title: String
    $description: String
    $categoryid: String
    $tags: [String]
    $audience: String
    $genres: [GenreInput]
    $status: BookStatus
    $completed: Boolean
    $updatedat: Datetime
    $idsremove: [String]
  ) {
    updateBookByBookid(
      input: {
        bookPatch: {
          title: $title
          description: $description
          categoryid: $categoryid
          tags: $tags
          audience: $audience
          status: $status
          completed: $completed
          updatedat: $updatedat
        }
        bookid: $bookid
      }
    ) {
      book {
        bookid
      }
    }

    editBookGenre(
      input: { idsremove: $idsremove, genres: $genres, bookid: $bookid }
    ) {
      bookid
    }
  }
`;
