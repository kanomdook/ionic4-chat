import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestApiService {

  constructor(public http: HttpClient) {

  }

  private authorizationHeader() {
    // const token = window.localStorage.getItem(environment.apiUrl + '@token') ?
    //   window.localStorage.getItem(environment.apiUrl + '@token') : '';
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    const headers = new HttpHeaders();
    return headers;
  }

  get(url: string) {
    return this.http.get(environment.apiUrl + url, { headers: this.authorizationHeader() }).toPromise();
  }

  post(url: string, Body: any) {
    return this.http.post(environment.apiUrl + url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  put(url: string, Body: any) {
    return this.http.put(environment.apiUrl + url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  delete(url: string) {
    return this.http.delete(environment.apiUrl + url, { headers: this.authorizationHeader() }).toPromise();
  }

}
