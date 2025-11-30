import {
     MAT_MOMENT_DATE_ADAPTER_OPTIONS,
     MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DATE_FORMATS } from '@shared/enums/date-formats.enum';

export const DateProvider = [
     {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
     },
     { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
];
