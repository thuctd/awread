import { retry, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class ChaptersApi {
  constructor(private apollo: Apollo) { }

  getAllChapters(bookId) {
    return this.apollo
      .query({
        query: gql`
          query BookChapters($bookId: UUID!) {
            allChapters(condition: { bookId: $bookId }, orderBy: POSITION_ASC) {
              nodes {
                bookId
                chapterId
                title
                createdAt
                updatedAt
                published
                position
              }
            }
          }
        `,
        variables: { bookId },
      })
      .pipe(map((res) => res?.['data']?.['allChapters']?.['nodes']));
  }

  getChapter(bookId: string, chapterId: string) {
    return this.apollo
      .query({
        query: gql`
          query DetailChapter($bookId: UUID!, $chapterId: UUID!) {
            allChapters(condition: { bookId: $bookId, chapterId: $chapterId }) {
              nodes {
                bookId
                chapterId
                title
                createdAt
                updatedAt
                published
                position
                bookByBookId {
                  title
                  cover
                }
                contentByChapterId {
                  content
                }
              }
            }
          }
        `,
        variables: {
          bookId,
          chapterId,
        },
      })
      .pipe(
        retry(2),
        map((res) => res?.['data']?.['allChapters']?.['nodes']?.[0])
      );
  }

  getChapterDetail(bookId: string, chapterId: string) {
    return this.apollo
      .query({
        query: gql`
          query DetailChapter($bookId: UUID!, $chapterId: UUID!) {
            allChapters(condition: { bookId: $bookId, chapterId: $chapterId }) {
              nodes {
                bookId
                chapterId
                title
                createdAt
                updatedAt
                published
                position
                bookByBookId {
                  categoryId
                  title
                  type
                }
                contentByChapterId {
                  content
                }
              }
            }
          }
        `,
        variables: {
          bookId,
          chapterId,
        },
      })
      .pipe(
        retry(2),
        map((res) => res?.['data']?.['allChapters']?.['nodes'])
      );
  }

  getPageChapter(bookId: string, offset: number) {
    return this.apollo
      .query({
        query: gql`
          query getPageChapter($bookId: UUID, $offset: Int) {
            allChapters(condition: { bookId: $bookId }, first: 1, offset: $offset, orderBy: POSITION_ASC) {
              nodes {
                chapterId
                bookId
                title
                position
              }
            }
          }
        `,
        variables: { bookId, offset },
      })
      .pipe(map((res) => res?.['data']?.['allChapters']?.['nodes']));
  }
}
