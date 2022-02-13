import { Component, OnInit } from '@angular/core';
import {User} from '../user-class/user'
import { UsersService } from '../users.service';
import { Repos } from '../repos';
@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css'],
})
export class HeropageComponent implements OnInit {
  user!: User;
  repos:Repos[];
  constructor(private UsersService: UsersService) {}
  searchUser(username: string){
   return this.UsersService.getProfile(username)
  }
  // searchUser(username: string) {
  //   this.UsersService.getProfile(username).then(
  //     (success) => {
  //       this.user = this.UsersService.user;
  //       console.log();
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  ngOnInit(): void {
    this.searchUser('Saitore973');
    this.user= this.UsersService.user;
    this.UsersService.getRepo('Saitore973');
    // this.UsersService.getProfile('Saitore973');
    this.repos=this.UsersService.repos;
  }
}

