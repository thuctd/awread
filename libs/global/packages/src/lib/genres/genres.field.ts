import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  forwardRef,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  FormGroup,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { startWith, map, withLatestFrom, tap, takeUntil } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, combineLatest, Subject } from 'rxjs';
@Component({
  selector: 'app-genres',
  templateUrl: './genres.field.html',
  styleUrls: ['./genres.field.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenresField),
      multi: true,
    },
  ],
})
export class GenresField
  implements OnInit, ControlValueAccessor, OnChanges, OnDestroy {
  onChange: (data: any) => void;
  onTouch: (data: any) => void;
  isDisabled: boolean;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() mode: 'string' | 'object' = 'string';
  @Input() placeholder = 'New genre...';
  @Input() label = 'Genre selection';
  @Input() allGenres: any[] = [];
  @Input() genres: string[] = [];
  @ViewChild('genreInput') genreInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  genreCtrl = new FormControl();
  // typingForm = new FormControl();
  @Input() bookForm: FormGroup;
  filteredGenres$: Observable<any[]>;
  destroy$ = new Subject();
  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
    // tslint:disable-next-line: no-string-literal
    // const allGenres = changes['allGenres'].currentValue;
    // if (allGenres && allGenres.length) {
    //   this.setGenres();
    // }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  // setGenres() {
  //   this.filteredGenres$ =
  //     this.typingForm.valueChanges.pipe(startWith(''))
  //       // this.genreCtrl.valueChanges
  //     .pipe(
  //         takeUntil(this.destroy$),
  //         withLatestFrom(this.genreCtrl.valueChanges.pipe(startWith([]))),
  //         map(([input, selectedGenre]) => {
  //           // console.log('input', input);
  //           // console.log('selectedGenre', selectedGenre);
  //           return this.allGenres.filter(genreItem => {
  //             const term = input.id ? input.name : input;
  //             if (this.mode === 'object') {
  //               return genreItem.name.toLowerCase().includes(term.toLowerCase());
  //             } else {
  //               return genreItem.toLowerCase().includes(term.toLowerCase());
  //             }
  //           });
  //         }),
  //       )
  // }

  ngOnInit(): void {}

  // click on mat option event
  writeValue(value: string[]) {
    // console.log('value', value, this.allGenres);
    this.genres = value;
    // this.typingForm.patchValue('');
    this.workAroundKeepShowListAfterSelectOption();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const addedValue = event.value ?? '';
    this.updateCurrentState(addedValue);
  }

  private workAroundKeepShowListAfterSelectOption() {
    setTimeout(() => {
      if (
        this.genreInput &&
        this.genreInput.nativeElement &&
        this.genres.length
      ) {
        this.genreInput.nativeElement.blur();
        setTimeout(() => {
          this.genreInput.nativeElement.focus();
        }, 1);
      }
    }, 100);
  }

  remove(genre: string): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres = this.genres.filter((item) => item !== genre);
    }
  }

  // click on mat option event
  selected(event: MatAutocompleteSelectedEvent): void {
    const addedValue =
      this.mode === 'object' ? event.option.value.name : event.option.value;
    this.updateCurrentState(addedValue);
  }

  updateCurrentState(addedValue) {
    this.genres = [...this.genres, addedValue];
    this.genreInput.nativeElement.value = '';
    this.genreCtrl.patchValue(this.genres);
    this.writeValue(this.genres);
    this.onChange(this.genres);
    this.cd.detectChanges();
    // console.warn('input, value', addedValue, this.genres, this.genreCtrl.value);
  }

  private _filter(selectedGenres: string[]): any[] {
    const result = this.allGenres.filter((item) => {
      const duplicated = this.getDuplicatedItems(selectedGenres, item);
      // console.log('duplicated', duplicated);
      return !duplicated;
    });
    // console.log('selectedGenres, result, this.allGenres', selectedGenres, result, this.allGenres);
    return result;
  }

  private getDuplicatedItems(selectedGenres: string[], item: any | string) {
    if (this.mode === 'object') {
      // console.log('selectedGenres', selectedGenres, item);
      return (
        selectedGenres &&
        !!selectedGenres.filter((selectedItem) => selectedItem === item.id)
          .length
      );
    }
    return !!selectedGenres.filter(
      (selectedItem) => selectedItem.toLowerCase() === item.toLowerCase()
    ).length;
  }

  getId(genre) {
    return this.mode === 'object' ? genre.id : genre;
  }

  getName(genre) {
    return this.mode === 'object' ? genre.name : genre;
  }

  getNameFromId(genre: string) {
    const foundItem = this.allGenres.find((item) => item.name === genre);
    return this.mode === 'object'
      ? foundItem
        ? foundItem.name
        : genre
      : genre;
  }
}
