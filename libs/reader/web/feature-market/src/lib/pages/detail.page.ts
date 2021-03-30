import { ActivatedRoute } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';
import { BooksFacade } from '../facades';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit {
  book$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('bookId')),
      switchMap(id => this.booksFacade.getDetailBook(id)),
    ).subscribe(book => this.book$ = book)
  }
}
