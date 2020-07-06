import { CalendarEvent } from 'calendar-utils';
import {dairy} from 'src/app/Data/dairy'

export enum CalendarEventTimesChangedEventType {
  Drag = 'drag',
  Drop = 'drop',
  Resize = 'resize',
}

/**
 * The output `$event` type when an event is resized or dragged and dropped.
 */
export interface changedairytime<MetaType = any> {
  type: CalendarEventTimesChangedEventType;
  event:dairy;
  newStart: Date;
  newEnd?: Date;
  allDay?: boolean;
}