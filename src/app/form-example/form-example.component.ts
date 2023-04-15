import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  form = new FormGroup({ // form avec reactiveFormsModule
    name: new FormControl('', [Validators.required,
    Validators.minLength(3),Validators.maxLength(30),Validators.pattern('[a-z A-Z ]*')]),
    email: new FormControl('', [Validators.required,
    Validators.email]),
    body: new FormControl('', Validators.required)
    });
    get f(){
    return this.form.controls;
    }
    submit(){
    console.log(this.form.value);
    }
    }

