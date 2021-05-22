import { Router } from '@angular/router';
import { Directive, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class AuthorPage {

  constructor(private router: Router) { }

  onMoreBooksByAuthor(authorId: string) {
    // authorId = '4115315316578_zxxxcas';
    this.router.navigate(['/author', authorId, 'books']);
  };
}
