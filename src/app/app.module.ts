import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {UsersService } from './users.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HeropageComponent } from './heropage/heropage.component';
import { DateCountPipe } from './date-count.pipe';
@NgModule({
  declarations: [AppComponent, ProfileComponent, NavbarComponent, HeropageComponent, DateCountPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
