import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './CRED/NewComponent/side-nav/side-nav.component';
import { AddUserComponent } from './CRED/Pages/add-user/add-user.component';
import { AllUsersComponent } from './CRED/Pages/all-users/all-users.component';
//import { AllUsersComponent } from './CRED/Pages/all-users/all-users.component';

// @NgModule({
//   declarations: [
//     AllUsersComponent,
//     AddUserComponent,
//     SideNavComponent
//   ],

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideNavComponent,AddUserComponent,AllUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrudApp';
}
