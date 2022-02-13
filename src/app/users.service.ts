import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-class/user';
import { environment } from 'src/environments/environment';
import { Repos } from './repos';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user!: User;
  repos: Repos[]=[];

  private username!: string;
  // private clientsecret = 'cd0d795072a494790345859fb21d06ad94ecafee';
  // private clientid = '641ddc278c83b0cf2ca2';

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '', '', '');
    // this.repos = new Repos('', '', '', '', new Date());
  }
  getProfile(username: string) {
    interface ApiResponse {
      name: any;
      login: any;
      avatar_url: any;
      link: any;
      bio: any;
      followers: any;
      following: any;
      public_repos: any;
    }
    let userUrl = `https://api.github.com/users/${username}?${environment.apiKey}`;
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(userUrl)
        .toPromise()
        .then(
          (response) => {
            this.user.name = response?.name;
            this.user.login = response?.login;
            this.user.avatar = response?.avatar_url;
            this.user.link = response?.link;
            this.user.bio = response?.bio;
            this.user.followers = response?.followers;
            this.user.following = response?.following;
            this.user.public_repos = response?.public_repos;

            resolve();
          },
          (error) => {
            this.user.name =
              'We couldn’t find any users matching the name given';

            reject(error);
          }
        );
    });
    return promise;
  }
  getRepo(username: string) {
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
      language: string;
      
    }

    let repoUrl = `https://api.github.com/users/${username}/repos?${environment.apiKey}`;
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(repoUrl)
        .toPromise()
        .then(
          (response) => {
            for(let i=0;i<this.user.public_repos;i++){
              let repo = new Repos('', '', '', '');
              repo.name= response[i]["name"];
              repo.html_url= response[i]["html_url"];
              repo.description= response[i]["description"];
              repo.language= response[i]["language"];
              this.repos.push(repo);
            }
            // this.repos.name = response?.name;
            // this.repos.html_url = response?.html_url;
            // console.log(this.repos);
            resolve();
          },
          (error) => {
            console.log('sorry we couldnt find a repository by the name provided')
            reject(error);
          }
        );
    });
    return promise;
  }
}

// `https://api.github.com/users/Saitore973/repos?'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'`;
//   getRepositories(username: string) {
//     interface ApiResponse {
//       name: any;
//       html_url: any;
//       description: any;
//       language: any;
//       created_at: Date;
//     }
    // let repoUrl = `https://api.github.com/users/${username}/repos?${environment.apiKey}`;
//     let promise =new Promise<void>((resolve,reject) => {
//       this.http.get<ApiResponse>(repoUrl).toPromise().then(
//         (response)=> {
          // this.repos.name=response?.name;
//           this.repos.html_url= response?.html_url;
//           this.repos.description=response?.description;
//           this.repos.language=response?.language;
//           // this.repos.created_at=response.created_at;
//           resolve()
          
//         },
//         (error) => {
//           this.repos.name='we couldnt find any repos matching the name given';
//           reject(error);
//         }
//       );
//     });
//     return promise;
    

//   }
// }
  

  

//   getData() {
      
//     return this.http.get('https://api.github.com/users/' +
//       this.username +
//       '?client_id=' +
//       this.clientid+'$client_secret='+this.clientsecret);
//   }
// }



// cd0d795072a494790345859fb21d06ad94ecafee;