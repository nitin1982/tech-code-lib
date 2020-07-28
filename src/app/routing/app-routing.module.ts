import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDisplayComponent } from '../dashboard/components/dashboard-display/dashboard-display.component';
import { HomeComponent } from '../home/components/home/home.component';
import { UserRegistrationComponent } from '../security/components/user-registration/user-registration.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardDisplayComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'UserReg',
    component: UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
