import { tap, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class ChaptersApi {
  constructor(private apollo: Apollo) {}

  getAllChapters(bookid: string) {
    return this.apollo
      .query({
        query: gql`
          query allChapters($bookid: String) {
            allChapters(
              condition: { bookid: $bookid }
              orderBy: CREATEDAT_ASC
            ) {
              nodes {
                chapterid
                title
                status
                updatedat
                publishedat
                createdat
              }
            }
          }
        `,
        variables: { bookid },
      })
      .pipe(tap(), retry(2));
  }

  getChapterDetail(chapterid: string, bookid: string) {
    return this.apollo.query({
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
        createdat: chapter.createdat ?? new Date(),
        updatedat: chapter.updatedat ?? new Date(),
        status: chapter.status ?? 'DRAFT',
      },
      //TODO: dung Chapter(chapter) import tu '../model
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
        updatedat: chapter.chapter ?? new Date(),
        status: chapter.status ?? 'DRAFT',
      },
      //TODO: dung Chapter(chapter) import tu '../model
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
