import { Chapter, createChapterObject } from './../models/chapter.model';
import { tap, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {
  CREATE_CHAPTER_AND_UPDATE_BOOK_STATUS_MUATATION,
  CREATE_CHAPTER_MUATATION,
} from '../graphqls';

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
              orderBy: CREATEDAT_DESC
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
      .pipe(retry(2));
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

  createChapter(chapter: Chapter, isPublishedBook = false) {
    if (isPublishedBook) {
      return this.apollo.mutate({
        mutation: CREATE_CHAPTER_AND_UPDATE_BOOK_STATUS_MUATATION,
        variables: {
          ...createChapterObject(chapter),
          bookStatus: isPublishedBook ? 'PUBLISHED' : 'DRAFT',
        },
      });
    }
    return this.apollo.mutate({
      mutation: CREATE_CHAPTER_MUATATION,
      variables: {
        ...createChapterObject(chapter),
        bookStatus: isPublishedBook ? 'PUBLISHED' : 'DRAFT',
      },
    });
  }

  updateChapter(chapter: Chapter) {
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
      variables: createChapterObject(chapter),
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
