import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http ,Response } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }
 
  ionViewDidLoad() {
    console.log(this.http.get('http://192.168.1.90:8084/'));
    console.log('ionViewDidLoad RecipePage');
  }

}
