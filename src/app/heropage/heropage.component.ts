import { Component, OnInit } from '@angular/core';
import {User} from '../user-class/user'
import { UsersService } from '../users.service';
@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css'],
})
export class HeropageComponent implements OnInit {
  user!: User;
  constructor(private UsersService: UsersService) {}
  searchUser(username: string) {
    this.UsersService.getProfile(username).then(
      (success) => {
        this.user = this.UsersService.user;
        console.log();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.searchUser('Saitore973');
  }
}

