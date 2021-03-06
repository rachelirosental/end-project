import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { DairyService } from '../shared/services/dairy.service';
import { dairy } from '../Data/dairy';
import { dairychangeevent, CalendarEventTimesChangedEventType } from '../Data/dairychangeevent';
import { NewdairyComponent } from '../newdairy/newdairy.component';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../Data/Room';
import { TypeMeeting } from '../Data/TypeMeeting';
import { user } from '../Data/user';
import { RoomService } from '../shared/services/room.service';
import { UserService } from '../shared/services/user.service';
declare var $: any;

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.scss'],

})
export class DairyComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: dairy;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<p ></p>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        
        this.deletedairy(event);
        this.handleEvent('Edited', event);
      },
    },
  
  ];
 events:dairy[];
  refresh: Subject<any> = new Subject();
  roomlist:Room[]=[]
typeMeeting:TypeMeeting[]=[]
user:user[]=[]

  //   // events: CalendarEvent[] = [
  //   //   {
  //   //     start: subDays(startOfDay(new Date()), 1),
  //   //     end: addDays(new Date(), 1),
  //   //     title: 'A 3 day event',
  //   //     color: colors.red,
  //   //     actions: this.actions,
  //   //     allDay: true,
  //   //     resizable: {
  //   //       beforeStart: true,
  //   //       afterEnd: true,
  //   //     },
  //   //     draggable: true,
  //   //   },
  //   //   {
  //   //     start: startOfDay(new Date()),
  //   //     title: 'An event with no end date',
  //   //     color: colors.yellow,
  //   //     actions: this.actions,
  //   //   },
  //   //   {
  //   //     start: subDays(endOfMonth(new Date()), 3),
  //   //     end: addDays(endOfMonth(new Date()), 3),
  //   //     title: 'A long event that spans 2 months',
  //   //     color: colors.blue,
  //   //     allDay: true,
  //   //   },
  //   //   {
  //   //     start: addHours(startOfDay(new Date()), 2),
  //   //     end: addHours(new Date(), 2),
  //   //     title: 'A draggable and resizable event',
  //   //     color: colors.yellow,
  //   //     actions: this.actions,
  //   //     resizable: {
  //   //       beforeStart: true,
  //   //       afterEnd: true,
  //   //     },
  //   //     draggable: true,
  //   //   },
  //   // ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, public DairyService: DairyService,private route :ActivatedRoute ,private RoomService:RoomService,private UserService:UserService)  { }



  dayClicked({ date, events }: { date: Date; events: dairy }): void {


    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true)

      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: dairychangeevent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

handleEvent(action: string, event): void {
  this.modalData = { event, action };
//click to open model
this.getroomlist()
  this.modal.open(this.modalContent, { size: 'lg' });
}

  addEvent(): void {
    // this.events = [
    //   ...this.events,


    // ];ng
    const modalRef = this.modal.open(NewdairyComponent);
// modalRef.componentInstance.user = this.user;
  }

  deleteEvent(eventToDelete: dairy) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit(): void {
    this.getdaries();
   
    this.getNameUserList();
    this.getTypemeetList();


  }
  getdaries() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.DairyService.getdaries(id).subscribe((res: dairy[]) => {
      localStorage.setItem("daries", JSON.stringify(res))
      this.events = res

      if(this.events!=null)
       { this.events.forEach(e => {
         console.log('dd',typeof(e.start))
          e.start = new Date(e.start);
          e.end = new Date(e.end);
          e.actions = this.actions
        })}
      console.log(this.events)
    });
  }
  edit(){
  
    debugger;
    this.DairyService.update(this.modalData.event).subscribe(res=>console.log(res))

  } getroomlist() {
   
    console.log('hellllll');
    this.modalData.event.end=new Date(this.modalData.event.end);
    this.modalData.event.start=new Date(this.modalData.event.start);
    this.RoomService.getlistrooms(this.modalData.event).subscribe((res: Room[]) => {
      localStorage.setItem("roomslist", JSON.stringify(res))
      this.roomlist = res,
        console.log(this.roomlist)
    });
  }
  getNameUserList(){
  
    this.UserService.getusers().subscribe(res=>{
      localStorage.setItem("users",JSON.stringify(res)),
      this.user=res,console.log('users',this.user)
      
    },err=>{
      alert("error")
    })
  }
  getTypemeetList(){
    
    this.DairyService.getTypeMeetList().subscribe(res=>{
      localStorage.setItem("typemeeting",JSON.stringify(res)),
      this.typeMeeting=res,console.log('typemeeting',this.typeMeeting)
      
    },err=>{
      alert("error")
    })
  }
  deletedairy(id){
       var answer = window.confirm("האם אתה בטוח שברצונך למחוק פגישה זה?");
    if (answer) {
      this.DairyService.delete(id).subscribe(res=>{
        this.getdaries();
        console.log(res)
      },err=>{
        alert("error")
      })
    }
    else {
        
    }

  }
 
}





















