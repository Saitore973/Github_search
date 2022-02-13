import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-class/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user!: User;

  private username!: string;
  // private clientsecret = 'cd0d795072a494790345859fb21d06ad94ecafee';
  // private clientid = '641ddc278c83b0cf2ca2';

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '', '', '');
  }
  getProfile(username: string) {
    interface ApiResponse {
      name: any;
      login: any;
      avatar_url:any;
      link: any;
      bio: any;
      followers: any;
      following: any;
      data: any;
    }
    let userUrl=`https://api.github.com/users/${username}?${environment.apiKey}`
      let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(userUrl).toPromise().then
      (response => {
        this.user.name = response?.name;
        this.user.login = response?.login;
        this.user.avatar = response?.avatar_url;
        this.user.link = response?.link;
        this.user.bio = response?.bio;
        this.user.followers =response?.followers;
        this.user.following= response?.following;
        this.user.data= response?.data;

        resolve()
      },
      error=>{
        this.user.name = "We couldn’t find any users matching the name given"

        reject(error)
        })
      })
      return promise;
    }
  }

  

//   getData() {
      
//     return this.http.get('https://api.github.com/users/' +
//       this.username +
//       '?client_id=' +
//       this.clientid+'$client_secret='+this.clientsecret);
//   }
// }



// cd0d795072a494790345859fb21d06ad94ecafee;