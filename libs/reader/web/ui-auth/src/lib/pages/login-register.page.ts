import { Directive, Injectable, Optional } from '@angular/core';
import { LoginRegisterIpage } from '@awread/ipages';

@Injectable({ providedIn: 'root' })
@Directive()
export class LoginRegisterPage extends LoginRegisterIpage {

}