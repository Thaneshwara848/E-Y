import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GalaryComponent } from './galary/galary.component';
import { EyComponent } from './ey/ey.component';
import { DeptComponent } from './dept/dept.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { FormsComponent } from './forms/forms.component';
import { TempletdrivenComponent } from './templetdriven/templetdriven.component';
import { ReactivdrivenComponent } from './reactivdriven/reactivdriven.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { ServicedemoComponent } from './servicedemo/servicedemo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { CharappComponent } from './charapp/charapp.component';
import { RamaComponent } from './rama/rama.component';
import { RavanaComponent } from './ravana/ravana.component';
import { SeethaComponent } from './seetha/seetha.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    GalaryComponent,
    EyComponent,
    DeptComponent,
    BindingComponent,
    DirectivesdemoComponent,
    PipecompComponent,
    FormsComponent,
    TempletdrivenComponent,
    ReactivdrivenComponent,
    ErrorcompComponent,
    ServicedemoComponent,
    A1Component,
    A2Component,
    A3Component,
    CharappComponent,
    RamaComponent,
    RavanaComponent,
    SeethaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
