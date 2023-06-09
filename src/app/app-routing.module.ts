import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondeComponent } from './seconde/seconde.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { ExerciceComponent } from './exercice/exercice.component';

const routes: Routes = [
  {path:'',component:FirstComponent},
  {path:'second',component:SecondeComponent},
  {path:'form',component:FormExampleComponent},
  {path:'exercice',component:ExerciceComponent},

  {path:'**',component:FirstComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
