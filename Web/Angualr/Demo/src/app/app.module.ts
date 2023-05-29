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
    ReactivdrivenComponent
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
