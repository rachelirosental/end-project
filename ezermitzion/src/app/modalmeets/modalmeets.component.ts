import { Component, OnInit, Input } from '@angular/core';
import { user } from '../Data/user';
import { DairyService } from '../shared/services/dairy.service';
import { dairy } from '../Data/dairy';
import { CalendarEventAction } from 'angular-calendar';
@Component({
  selector: 'app-modalmeets',
  templateUrl: './modalmeets.component.html',
  styleUrls: ['./modalmeets.component.scss']
})
export class ModalmeetsComponent implements OnInit {
@Input() user:user
meets:dairy[]
actions: CalendarEventAction[] = []
  constructor(public DairyService:DairyService ) { }

  ngOnInit(): void {
this.getdaries()
  }
  getdaries() {
    
    this.DairyService.getdaries(JSON.parse(localStorage.getItem("user")).userId).subscribe((res: dairy[]) => {
      localStorage.setItem("daries", JSON.stringify(res))
      this.meets = res

      if(this.meets!=null)
       { this.meets.forEach(e => {
         console.log('dd',typeof(e.start))
          e.start = new Date(e.start);
          e.end = new Date(e.end);
          e.actions = this.actions
        })}
      console.log(this.meets)
    });
  }
}


