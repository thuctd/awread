import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForgotPage implements OnInit {
 
  template = {
    forgotpassword: {
      title: 'Forgot Your Password?',
      notifi: 'Please the email address your used when creating your account, we’ll send you instructions to reset your password',
      changeButton: 'Send me Instructions'
    },
    signin: {
      suggest: 'Found your details?',
      changeButton: 'Signin',
    },
    signup: {
      suggest: 'New to Creyob?',
      changeButton: 'Creat an account',
    },
  }

  activeTemplate = this.template.forgotpassword;
  hasValueUs: boolean;

  constructor(

  ) { }

  ngOnInit(): void {
  }


  onKeyUpUsername(item) {
    if (item.target.value.length === 0) {
      this.hasValueUs = false
    } else {
      this.hasValueUs = true
    }
  }
}
