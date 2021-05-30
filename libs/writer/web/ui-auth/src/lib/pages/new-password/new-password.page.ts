import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class NewPasswordPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void { }

  updateNewPassword(password: string) {
    // console.log('password', password);
    // console.log('params: ', this.route.snapshot.queryParams);
    const code = this.route.snapshot.queryParams['oobCode'];
  }
}
