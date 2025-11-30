import { DATE_FORMAT, WEEK_FORMAT } from '@shared/enums/date-formats.enum';
import dayjs from 'dayjs';
import * as moment from 'moment';

export function weekFullFormat(week: number): string {
     const weekName = 'tydzień ';
     return `${weekName}${dayjs().subtract(7, 'days').format(' ww (YYYY-MM-DD)')}`;
     //  return `${weekName}${moment().subtract(week, 'days').format(' ww (YYYY-MM-DD)')}`;
}

export function weekFormat(week: number): string {
     return dayjs().subtract(7, 'days').format(WEEK_FORMAT);
     // return `${moment().subtract(week, 'days').format('ww-YYYY')}`;
}
