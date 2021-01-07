import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class ChaptersApi {
  constructor(private apollo: Apollo) {}

  getChapterDetail(chapterid: string, bookid: string) {
    return this.apollo.watchQuery({
      query: gql`
        query getChapterDetail($chapterid: String!, $bookid: String!) {
          allChapters(condition: { chapterid: $chapterid, bookid: $bookid }) {
            nodes {
              chapterid
              content
              title
              status
              updatedat
              createdat
              bookByBookid {
                bookid
                title
              }
            }
          }
        }
      `,
      variables: {
        chapterid,
        bookid,
      },
    });
  }

  createChapter(chapter) {
    return this.apollo.mutate({
      mutation: gql`
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
      `,
      variables: {
        chapterid: chapter.chapterid,
        bookid: chapter.bookid,
        content: chapter.content ?? '',
        title: chapter.title ?? '',
        createdat: new Date(),
        updatedat: new Date(),
        status: chapter.status ?? 'DRAFT',
      },
    });
  }

  updateChapter(chapter) {
    return this.apollo.mutate({
      mutation: gql`
        mutation updateChapter(
          $chapterid: String!
          $content: String
          $title: String
          $updatedat: Datetime
          $status: BookStatus
        ) {
          updateChapterByChapterid(
            input: {
              chapterPatch: {
                content: $content
                title: $title
                updatedat: $updatedat
                status: $status
              }
              chapterid: $chapterid
            }
          ) {
            chapter {
              chapterid
            }
          }
        }
      `,
      variables: {
        chapterid: chapter.chapterid,
        content: chapter.content ?? '',
        title: chapter.title ?? '',
        updatedat: new Date(),
        status: chapter.status ?? 'DRAFT',
      },
    });
  }

  removeChapter(chapterid: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation deleteChapter($chapterid: String!) {
          deleteChapterByChapterid(input: { chapterid: $chapterid }) {
            chapter {
              chapterid
            }
          }
        }
      `,
      variables: {
        chapterid,
      },
    });
  }
}
