import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class BooksClientApi {
  constructor(private apollo: Apollo) {}

  // get sasch noi bat
  getAllOutstandingBook() {
    return this.apollo.query({
      query: gql`
      query allOutstandingBooks(condition: {date: ""}, orderBy: VIEWCOUNT_DESC) {
        nodes {
          bookByBookid {
            bookid
              title
              img
              description
              completed
              status
              publishedat
              updatedat
          }
        }
      }
    `,
    });
  }

  // get sach de cu
  getNominatedBooks(authorids: string[], categoryids: string[]) {
    return this.apollo.query({
      query: gql`
      query allNominatedBook($authorids: String[], $categoryids: String[]) {
        allNominatedBook(authorids: $authorids, categoryids: $categoryids) {
          nodes {
             bookid
            introduce
            updatedat
            title
            completed
          }
        }
      }
    `,
      variables: {
        authorids,
        categoryids,
      },
    });
  }

  // filter book
  filterBooks(categoryid: string, year: number) {
    return this.apollo.query({
      query: gql`
        query filterBooks($categoryid: String, $year: Int) {
          filterBooks(categoryid: 10, year: 10, type: "") {
            nodes {
              bookid
              introduce
              updatedat
              title
              completed
            }
          }
        }
      `,
      variables: {
        categoryid,
        year,
      },
    });
  }
  // increase book view
  increaseBookView() {
    return this.apollo.mutate({
      mutation: gql`
        mutation inscreasebookview {
          inscreasebookview {
            increaseViewBookInDay(input: {}) {
              string
            }
          }
        }
      `,
      variables: {},
    });
  }

  getBooksByCategoryId(categoryid: string) {
    return this.apollo.query({
      query: gql`
        query getBooksByCategoryId($categoryid: String) {
          allBooks(
            condition: {
              categoryid: $categoryid
              status: PUBLISHED
              isdeleted: false
            }
          ) {
            nodes {
              bookid
            }
          }
        }
      `,
      variables: { categoryid },
    });
  }

  getNewlyUpdatedBooks() {
    return this.apollo.query({
      query: gql`
      query getNewlyUpdatedBooks() {
        allBooks(
          orderBy: PUBLISHEDAT_DESC
          condition: { status: PUBLISHED, isdeleted: false}
        ) {
          nodes {
            bookid
          }
        }
      }
    `,
    });
  }

  getBookAppreciate() {
    return this.apollo.query({ query: gql`` });
  }
}
