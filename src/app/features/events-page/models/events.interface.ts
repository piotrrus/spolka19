import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface EventsApi extends RestResponse {
     data: Event[];
}

export interface Event {
     id: number;
     // action: string;
     clientId: number;
     clientNr: string;
     invoiceNr: string;
     date: string;
     orderId: number;
     status: string;
     title: string;
     groupId: number;
}

export interface ClientEventDetailsApi extends RestResponse {
     data: ClientEventDetails;
}
export interface ClientEventDetails {
     id: number;
     clientId: number;
     measure_date: string | null;
     probe_date: string | null;
     delivery_date: string | null;
}

export interface CalendarEvent {
     id?: number;
     title?: string;
     date: string;
     color: string;
     allDay: boolean;
     groupId: number;
}
export interface CalendarEventApi {
     events: CalendarEvent;
}

export interface PersonalEventSave {
     id?: number;
     start: string;
     title: number;
     id_type: number;
     all_day?: boolean;
     id_event?: number;
     id_person?: number;
}

export interface PersonalEventsModalData {
     title: number;
     typeId: number;
     event: PersonalEvent;
}

export interface PersonalEvent {
     id?: string;
     eventDate: string;
     eventTitle?: string;
     groupId: number;
}

export interface ClientEventsModalData {
     title: number;
     typeId: number;
     event: ClientEventDetails;
}

export interface CalendarData {
     events: CalendarEvent[];
}
