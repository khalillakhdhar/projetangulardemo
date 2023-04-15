import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
// initialize the router
constructor(public router: Router) { }



  // redirect to second component with parameter nom
  redirect(){
     this.router.navigate(['/second', {'nom': 'toto'}]);
  }

}
