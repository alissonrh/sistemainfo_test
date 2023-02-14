import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './_services/auth.guard.service';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: 'details/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
