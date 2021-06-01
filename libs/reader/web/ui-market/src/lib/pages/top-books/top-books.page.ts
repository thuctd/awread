import { PersistNgFormPlugin } from '@datorama/akita';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable, OnInit, Directive, ChangeDetectorRef } from '@angular/core';
import { BooksFacade } from '@awread/core/books';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class TopBooksPage implements OnInit {
  topBooks$ = this.booksFacade.topBooks$;
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private fb: FormBuilder,
    private booksFacade: BooksFacade,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.booksFacade.getTopBooks().subscribe();
  }

  private initForm() {
    this.filtersForm = this.fb.group({
      typeBook: [''],
      genres: [''],
      criteria: [''],
      completed: [''],
      postingDate: [''],
    });

    this.persistForm = new PersistNgFormPlugin(
      this.booksFacade.booksQuery,
      'ui.filters')
      .setForm(this.filtersForm);
  }

}
