import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GalaryComponent } from './galary/galary.component';
import { EyComponent } from './ey/ey.component';
import { DeptComponent } from './dept/dept.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { FormsComponent } from './forms/forms.component';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { ServicedemoComponent } from './servicedemo/servicedemo.component';
import { CharappComponent } from './charapp/charapp.component';

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
  },
  {
    path:'bind',
    component:BindingComponent
  },
  {
    path:'dir',
    component:DirectivesdemoComponent
  },
  {
    path:'pipe',component:PipecompComponent
  },
  {
    path:'form',
    component:FormsComponent
  },
  {
    path:"serv",
    component:ServicedemoComponent
  },
  {
    path:'chat',
    component:CharappComponent
  },
  {
    path:'**',
    component:ErrorcompComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
