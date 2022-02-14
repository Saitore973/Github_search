import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeropageComponent } from './heropage/heropage.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: 'goals', component: NavbarComponent },
  { path: 'about', component: HeropageComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '/goals', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
