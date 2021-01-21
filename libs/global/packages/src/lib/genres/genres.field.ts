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
  EventEmitter,
  Output,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenresField),
      multi: true,
    },
  ],
})
export class GenresField implements OnInit {
  isDisabled: boolean;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() mode: 'string' | 'object' = 'string';
  @Input() genres;
  @ViewChild('genreInput') genreInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  genreCtrl = new FormControl();
  @Input() bookForm: FormGroup;
  @Output() genresEvent = new EventEmitter();
  genresListChip = [];
  removable = true;
  selectable = true;
  constructor() {}

  ngOnInit() {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.genresListChip.push(value.trim());
      this.genresEvent.emit(this.genresListChip);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.bookForm.patchValue({ genres: '' });
    // this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.genresListChip.indexOf(fruit);

    if (index >= 0) {
      this.genresListChip.splice(index, 1);
      this.genresEvent.emit(this.genresListChip);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.genresListChip.push(event.option.viewValue);
    this.genresEvent.emit(this.genresListChip);
    this.bookForm.patchValue({ genres: '' });
  }
}
