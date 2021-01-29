import { gql } from 'apollo-angular';
export const CREATE_CHAPTER_MUATATION = gql`
  mutation createChapter(
    $chapterid: String!
    $bookid: String!
    $content: String
    $title: String
    $createdat: Datetime
    $updatedat: Datetime
    $status: BookStatus
  ) {
    createChapter(
      input: {
        chapter: {
          chapterid: $chapterid
          bookid: $bookid
          content: $content
          title: $title
          createdat: $createdat
          updatedat: $updatedat
          status: $status
        }
      }
    ) {
      chapter {
        chapterid
      }
    }
  }
`;
export const CREATE_CHAPTER_AND_UPDATE_BOOK_STATUS_MUATATION = gql`
  mutation createChapter(
    $chapterid: String!
    $bookid: String!
    $content: String
    $title: String
    $createdat: Datetime
    $updatedat: Datetime
    $status: BookStatus
  ) {
    createChapter(
      input: {
        chapter: {
          chapterid: $chapterid
          bookid: $bookid
          content: $content
          title: $title
          createdat: $createdat
          updatedat: $updatedat
          status: $status
        }
      }
    ) {
      chapter {
        chapterid
      }
    }

    updateBookByBookid(
      input: { bookPatch: { status: PUBLISHED }, bookid: $bookid }
    ) {
      book {
        bookid
      }
    }
  }
`;
