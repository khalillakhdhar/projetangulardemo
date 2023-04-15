import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  /**
   *  formGroup controls pour le formulaire form
   * nom ,prenom* ne contient que des caractéres alphabétiques
      age >18 * (demo age>18)
    code postale de longeur 4-6 digit
    ville obligatoire et de 3 caractéres
    adresse un textarea non null
    email valide non null
    password alphanumérique non null

   */
  form = new FormGroup({
    nom: new FormControl('', [Validators.required,Validators.minLength(3), Validators.pattern('[a-z A-Z ]*')]),
    prenom: new FormControl('', [Validators.required,Validators.minLength(3),  Validators.pattern('[a-z A-Z ]*')]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    codePostal: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    ville: new FormControl('', [Validators.required, Validators.minLength(3)]),
    adresse: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z 0-9 ]*')])
  });
  get f() {
    return this.form.controls;
  }


}
