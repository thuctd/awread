import { Directive, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksFacade } from '../facades';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  isLoading$ = this.booksFacade.selectLoadingAkita();

  constructor(private booksFacade: BooksFacade, private router: Router) { }

  ngOnInit(): void {
    this.booksFacade.getAllBooks()
      //TODO: kich hoat lay du lieu 
      .subscribe();
  }
}
