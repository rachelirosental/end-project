import { Component, OnInit,Input } from '@angular/core';
import { Reference } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-modalreference',
  templateUrl: './modalreference.component.html',
  styleUrls: ['./modalreference.component.scss']
})
export class ModalreferenceComponent implements OnInit {
@Input() referenes:Reference[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.referenes)
  }

}
