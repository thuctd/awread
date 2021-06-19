import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransformDateApi {
  constructor() { }
  transformDate(updatedAt: any) {
    if (updatedAt === '') {
      return '';
    }
    const date = new Date();
    date.setDate(date.getDate() - updatedAt);
    const dd = String(date.getDate()).padStart(2, '0');
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return yyyy + '-' + MM + '-' + dd;
  }
}
