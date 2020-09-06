import { CalendarEvent } from 'calendar-utils';
import { dairy } from './dairy';

export enum CalendarEventTimesChangedEventType {
  Drag = 'drag',
  Drop = 'drop',
  Resize = 'resize',
}

/**
 * The output `$event` type when an event is resized or dragged and dropped.
 */
export interface dairychangeevent<MetaType = any> {
  type: CalendarEventTimesChangedEventType;
  event: dairy;
  newStart: Date|"MM/dd/yyyy 'בשעה' h:mma";
  newEnd?: Date|"MM/dd/yyyy 'בשעה' h:mma";
  allDay?: boolean;
}