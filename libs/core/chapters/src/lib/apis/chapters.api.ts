import { retry, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class ChaptersApi {
  constructor(private apollo: Apollo) { }

  getLatestPosition(bookId) {
    return this.apollo
      .query({
        query: gql`
          query BookChapters($bookId: UUID!) {
            allChapters(condition: { bookId: $bookId, isDeleted: false }, orderBy: POSITION_DESC, first: 1) {
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

  getAllChapters(bookId) {
    return this.apollo
      .query({
        query: gql`
          query BookChapters($bookId: UUID!) {
            allChapters(condition: { bookId: $bookId, isDeleted: false }, orderBy: POSITION_ASC) {
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
            allChapters(condition: { bookId: $bookId, isDeleted: false }, first: 1, offset: $offset, orderBy: POSITION_ASC) {
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

  update(chapter) {
    return this.apollo.mutate({
      mutation: gql`
      mutation updateChapter($chapterId: UUID!, $title: String, $content: String, $published: Boolean) {
        updateChapterByChapterId(
          input: {chapterPatch: { title: $title, published: $published }, chapterId: $chapterId}
        ) {
          chapter {
            title
            published
          }
        }
        updateContentByChapterId(
          input: {contentPatch: {content: $content }, chapterId: $chapterId}
        ) {
          content {
            chapterId
          }
        }
      }

      `,
      variables: {
        ...chapter,
        title: chapter.title ?? 'Untitle',
        content: chapter.content ?? 'No Content',
      }
    })
  }

  create(chapter) {
    return this.apollo.mutate({
      mutation: gql`
      mutation newChapter($bookId: UUID!, $title: String, $content: String, $published: Boolean, $position: BigFloat) {
        newChapter(
          input: { bookId: $bookId, title: $title, content: $content, published: $published, position: $position }
        )  {
          uuid
        }
      }

      `,
      variables: {
        ...chapter,
        title: chapter.title ?? 'Untitle',
        content: chapter.content ?? 'No Content',
      }
    })
  }

  delete(chapterId) {
    return this.apollo.mutate({
      mutation: gql`
      mutation delete($chapterId: UUID!) {
          updateChapterByChapterId(
          input: {chapterPatch: { isDeleted: true }, chapterId: $chapterId}
        ) {
          chapter {
            chapterId
            isDeleted
          }
        }
      }
      `,
      variables: { chapterId }
    })
  }
}
