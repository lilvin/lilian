import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {OtpPage} from '../otp/otp';
import {RecipePage} from '../recipe/recipe';
import {RecipesPage} from '../recipes/recipes';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public gotoLogin(){
    this.navCtrl.push(LoginPage);
}

public gotoRecipes(){
    this.navCtrl.push(RecipesPage);
}
}
