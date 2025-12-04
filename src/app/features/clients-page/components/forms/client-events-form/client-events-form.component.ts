import {
     Component,
     OnInit,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
} from '@angular/core';

import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { EventsForm } from '@shared/forms/events.form';
import { DateHandler } from '@shared/utils/date/date.handler';
import {
     ClientEvents,
     ClientEventsSave,
} from '@features/clients-page/models/clients-events.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DATE_FORMAT_PL } from '@shared/models/date-formats';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
     selector: 'app-client-events-form',
     templateUrl: './client-events-form.component.html',
     styleUrls: ['./client-events-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [
          CommonModule,
          FormsModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatDatepickerModule,
          MatInputModule,
          MatButtonModule,
     ],
     providers: [
          //to external provider
          MatNativeDateModule,
          MatDatepickerModule,
          { provide: MAT_DATE_LOCALE, useValue: DATE_FORMAT_PL },
     ],
})
export class ClientEventsFormComponent extends BaseFormComponent implements OnInit {
     @Input() set clientEvents(clientEvents: ClientEvents | null) {
          clientEvents ? this.form.form.patchValue(clientEvents) : null;
          this.isFormValid.emit(this.form.form.valid);
          this.isEditable = clientEvents
               ? DateHandler.isPastDate(clientEvents?.deliveryDate)
               : false;
     }
     @Input() isClientDetails: boolean;

     @Output() public formChange = new EventEmitter<ClientEventsSave>();

     // @Output() public formChange = new EventEmitter();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public inputReadonly: boolean = true;
     public isEditable: boolean = false;
     public form: EventsForm = new EventsForm(this.fb);
     public minDate = new Date();
     public maxDate = DateHandler.maxDate;

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          // this.checkFormAndEmit();
     }

     public onUpdateEvents(): void {
          const clientEvents = <ClientEventsSave>{};

          clientEvents.delivery_date = DateHandler.formatDate(this.form.deliveryDate?.value);
          clientEvents.measure_date = DateHandler.formatDate(this.form.measureDate?.value);
          clientEvents.probe_date = DateHandler.formatDate(this.form.probeDate?.value);
          this.formChange.emit(clientEvents);
     }
}
