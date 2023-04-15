import { Component } from '@angular/core';

@Component({
  selector: 'app-seconde',
  templateUrl: './seconde.component.html',
  styleUrls: ['./seconde.component.css']
})
export class SecondeComponent {
nom:string=""; // variable nom initialisé
prenom:string=""; // variable prenom initialisé avec type nullable

sayhello()
{
  console.log(this.nom+" "+this.prenom)
  alert(`Hello ${this.nom} ${this.prenom}`) // alt+7
}


}
