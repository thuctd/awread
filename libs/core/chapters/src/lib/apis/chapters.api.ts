import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class ChaptersApi {
  constructor(private apollo: Apollo) { }

  getAllChapters(bookId) {
    return this.apollo.query({
      query: gql`
        query BookChapters($bookId: UUID!) {
          allChapters(first: 20, condition: { bookId: $bookId }) {
            nodes {
              chapterId
              title
              createdAt
              updatedAt
              published
            }
          }
        }
      `,
      variables: {
        bookId,
      },
    });
  }

  getChapterDetail(bookId: string, chapterId: string) {
    return this.apollo.query({
      query: gql`
        query DetailChapter($bookId: UUID!, $chapterId: UUID!) {
          allChapters(first: 20, condition: { bookId: $bookId, chapterId: $chapterId }) {
            nodes {
              chapterId
              title
              createdAt
              updatedAt
              published
              contentByChapterId {
                content
              }
            }
          }
        }
      `,
      variables: {
        bookId,
        chapterId
      },
    });
  }
}
