import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import {LoginPage} from '../login/login';
import {RecipePage} from '../recipe/recipe';
import {RecipesPage} from '../recipes/recipes';
import {SignupPage} from '../signup/signup';



@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  otpForm:FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.otpForm = this.formBuilder.group({
      otp:[''],
    
    });
  
  }
  onOtp(){
    this.navCtrl.push(RecipesPage)
  }
  onResendOtp(){
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

}
