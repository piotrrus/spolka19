import dayjs from 'dayjs';
import { DATE_FORMAT } from './date-time.formats.enum';
import { CalendarRange } from '@shared/interfaces/calendar-range.interface';
import { isDate } from 'moment';

export class DateHandler {
     public static maxDate(): string {
          return dayjs().add(3, 'months').format(DATE_FORMAT);
     }

     public static minDate(): Date {
          return dayjs().subtract(1, 'months').toDate();
     }

     public static currentDate(): string {
          return dayjs().add(1, 'months').format(DATE_FORMAT);
     }

     public static calendarRange(): CalendarRange {
          return {
               start: dayjs().subtract(1, 'months').format(DATE_FORMAT),
               end: dayjs().add(1, 'months').format(DATE_FORMAT),
          };
     }

     public static formatDate(date: string): string | null {
          console.log(isDate(date));
          return isDate(date) ? dayjs(date).format(DATE_FORMAT) : null;
     }

     public static isPastDate(date: string): boolean {
          const today = dayjs();
          const isDiff = today.diff(date, 'month');
          return isDiff > 0 ? true : false;
     }

     public static compareDates(date1: string, date2: string): boolean {
          const date = dayjs(date1);
          const isDiff = date.diff(date2);
          return isDiff < 0 ? true : false;
     }

     // public myFilter = (d: Date | null): boolean => {
     //      const day = (d || new Date()).getDay();
     //      return day !== 0;
     // };
}
