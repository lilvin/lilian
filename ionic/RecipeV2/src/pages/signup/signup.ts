import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import {LoginPage} from '../login/login';
import {OtpPage} from '../otp/otp';
import {RecipePage} from '../recipe/recipe';
import {RecipesPage} from '../recipes/recipes';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    registerForm:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onregister(){
    this.navCtrl.push(LoginPage);
  }
  onhaveaccount(){
    this.navCtrl.push(LoginPage);
  }
}
