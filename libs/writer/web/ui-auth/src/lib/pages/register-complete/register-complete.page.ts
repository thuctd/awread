import { Directive, Injectable, OnInit } from '@angular/core';
import { RegisterCompleteIpage } from '@awread/core/users';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class RegisterCompletePage extends RegisterCompleteIpage { }