import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { User } from '../user-class/user';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  repos!:Repos;
  constructor() { }

  ngOnInit(): void {
  }


//   constructor(private UsersService:UsersService) {
//    }
// //    searchUser(username: string){
//      this.UsersService.getProfile(username).then((success) => {
//       this.user = this.UsersService.user;
//       console.log();
//     },(error) => {
//       console.log(error);
//     });

//     this.UsersService.getRepo(username).then(
//       (success) => {
//         this.repos = this.UsersService.repos;
//         console.log();
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//    }

//   ngOnInit(): void {
    
//     this.searchUser('Saitore973');
//     this.user = this.UsersService.user;
//     this.UsersService.getRepo('Saitore973');
//     this.UsersService.getProfile('Saitore973');
//     this.repos = this.UsersService.repos;
//   }

// 
}
