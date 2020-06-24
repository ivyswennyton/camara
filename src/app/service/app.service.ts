import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiURL: string;

  constructor(protected http: HttpClient) { this.apiURL = 'https://jsonplaceholder.typicode.com'; }

  getInfosTags() {
    return this.http.get<any[]>(`${ this.apiURL }/users`);
  }
  getUserId(userId: number){
    return this.http.get<any[]>(`${ this.apiURL }/users/`+userId);
  }

}
