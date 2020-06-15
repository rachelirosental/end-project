import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referencebuttons',
  templateUrl: './referencebuttons.component.html',
  styleUrls: ['./referencebuttons.component.scss']
})
export class ReferencebuttonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  next1(){
    
    this.router.navigateByUrl('/reference');
 }
 next2(){
  this.router.navigateByUrl('/formreference');
}

}
