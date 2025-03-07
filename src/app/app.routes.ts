import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './CRED/Pages/add-user/add-user.component';
import { SideNavComponent } from './CRED/NewComponent/side-nav/side-nav.component';
import { AllUsersComponent } from './CRED/Pages/all-users/all-users.component';
import { UpdateUserComponent } from './CRED/Pages/update-user/update-user.component';

export const routes: Routes = [
    { path: 'add-user', component: AddUserComponent },
    { path: 'side-nav', component: SideNavComponent },
    { path: 'update-user', component: UpdateUserComponent },
    { path: '', component: AllUsersComponent },
     { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
    // { path: 'all-users', component: AllUsersComponent },
    //  { path: 'all-users', redirectTo: '/all-users', pathMatch: 'full' },
    // { path: '**', redirectTo: '/all-users' }
  ];