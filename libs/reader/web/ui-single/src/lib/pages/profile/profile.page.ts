import { Directive, Injectable } from '@angular/core';
import { ProfileIPage } from '@awread/ipages';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ProfilePage extends ProfileIPage {

}