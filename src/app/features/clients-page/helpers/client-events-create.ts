import { ClientEvents, ClientEventsSave } from '../models/clients-events.interface';
import { DateHandler } from '@shared/utils/date/date.handler';

export function clientEventsModelCreate(clientEvents: ClientEvents): ClientEventsSave {
     const events: ClientEventsSave = {
          measure_date: clientEvents.measureDate ? DateHandler.formatDate(clientEvents.measureDate) : null,
          probe_date: clientEvents.probeDate ? DateHandler.formatDate(clientEvents.probeDate) : null,
          delivery_date: clientEvents.deliveryDate ? DateHandler.formatDate(clientEvents.deliveryDate) : null,
     };
     return events;
}
