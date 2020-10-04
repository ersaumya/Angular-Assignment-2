import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './patient/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDetailComponent } from './patient/register-detail/register-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
