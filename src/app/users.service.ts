import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getData(){
    let apiKey = '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;';
    let apiUrl = `https://api.github.com/users/daneden?access_token= ${apiKey} `;
    return this.http.get(apiUrl)
  }
}
