import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Event } from '@features/events-page/models/events.interface';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';

@Component({
     selector: 'app-last-events',
     templateUrl: './last-events.component.html',
     styleUrls: ['./last-events.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastEventsComponent {
     @Input() lastEvents: Event[] = [];

     public dataLength = 1;

     public noDataMessage = { emptyMessage: COMMON_MESSAGES.NO_DATA_MESSAGE };
}
