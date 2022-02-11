import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub_search';
  constructor(private user: UsersService){
    this.user.getData().subscribe(data => {
      console.log(data)
    })
  }
}
 
// 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;