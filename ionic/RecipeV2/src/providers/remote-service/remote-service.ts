import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RemoteServiceProvider {
  baseUrl:string = "http://192.168.1.90:8084/";


  constructor(public httpClient : HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  }

}
