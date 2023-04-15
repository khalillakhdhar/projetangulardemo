import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondeComponent } from './seconde/seconde.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormExampleComponent } from './form-example/form-example.component';
import { ExerciceComponent } from './exercice/exercice.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondeComponent,
    FormExampleComponent,
    ExerciceComponent
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
