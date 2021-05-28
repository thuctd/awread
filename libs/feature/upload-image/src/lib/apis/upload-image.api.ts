import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UploadImageApi {

  constructor(
    private httpClient: HttpClient
  ) { }

  up(blob, type: 'cover' | 'avatar', id: string) {
    const url = `http://localhost:3333/api/upload-cover`;
    const formData = new FormData();
    formData.append('file', blob);
    formData.append('type', type);
    formData.append('name', id);
    formData.append('extension', 'webp');
    return this.httpClient.post(`${url}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

}
