import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  baseUrl = '/test/';

  constructor(private http: HttpClient) { }

  async getTests(){
    return this.http.get(AppComponent.url + this.baseUrl);
  }

}

