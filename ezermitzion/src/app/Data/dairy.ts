import {Room} from 'src/app/Data/Room'
import {TypeMeeting} from 'src/app/Data/TypeMeeting'
import {user} from 'src/app/Data/user'
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
export interface dairy extends CalendarEvent{
  dairyId: number;
  label:string;
  onClick({ event, sourceEvent, }: {
    event: dairy;
    sourceEvent: MouseEvent | KeyboardEvent;
}): any;
  roomId:number;
  description:string;
  typeMeeting:number;
  rooms:Room;
  typeMeeting1:TypeMeeting;
  user:user;
  }
