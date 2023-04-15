import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondeComponent } from './seconde/seconde.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormExampleComponent } from './form-example/form-example.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondeComponent,
    FormExampleComponent
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
