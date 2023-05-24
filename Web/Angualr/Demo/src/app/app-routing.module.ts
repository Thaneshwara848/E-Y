import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GalaryComponent } from './galary/galary.component';
import { EyComponent } from './ey/ey.component';
import { DeptComponent } from './dept/dept.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'galary',component:GalaryComponent
  },
  {
    path:'ey',
    component:EyComponent
  },
  {
    path:'dept',component:DeptComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
