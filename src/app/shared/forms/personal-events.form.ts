import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class PersonalEventForm extends BaseForm {
     protected override frm = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               eventDate: ['', [Validators.required]],
               title: ['', [Validators.required, Validators.maxLength(150)]],
          });
     }

     public get eventDate(): AbstractControl | null {
          return this.frm.get('eventDate');
     }
     public get title(): AbstractControl | null {
          return this.frm.get('title');
     }
}
