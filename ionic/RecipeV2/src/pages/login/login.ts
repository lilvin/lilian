import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import {OtpPage} from '../otp/otp';
import {RecipePage} from '../recipe/recipe';
import {RecipesPage} from '../recipes/recipes';
import {SignupPage} from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private formBuilder: FormBuilder
     ) {
 
  this.credentialsForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });
}

onSignIn() {
  
  this.navCtrl.push(OtpPage);
}

onForgotPassword() {
  
}
create(){
  this.navCtrl.push(SignupPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goBack(){
    this.navCtrl.pop();
} 
}