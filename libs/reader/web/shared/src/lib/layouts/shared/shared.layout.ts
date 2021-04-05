import { untilDestroyed } from '@ngneat/until-destroy';
import { Directive, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class SharedLayout implements OnInit {
  searchControl: FormControl = new FormControl('');
  search$;

  get hasSearchTermInput(): boolean {
    return !!this.searchControl.value;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.search$ = this.searchControl.valueChanges.pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((term) => {
        this.search$ = term
      });
  }

  navigateToSearch() {
    this.router.navigate(['/search'], { queryParams: { search: 'asd' } });
  }
}

