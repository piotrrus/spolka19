import { FormGroup } from '@angular/forms';
import { JacketForm } from './jacket.form';
import { TrousersForm } from './trousers.form';
import { BaseForm } from './base.form';

export class SmokingForm extends BaseForm {
     protected override frm = this.createForm();

     private _jacketForm: JacketForm;
     private _trousersForm: TrousersForm;

     protected createForm(): FormGroup {
          return this.fb.group({
               trousersForm: this._trousersForm.createForm(),
               jacketForm: this._jacketForm.createForm(),
          });
     }

     public get trousersForm(): TrousersForm {
          return this._trousersForm;
     }

     set trousersForm(value: TrousersForm) {
          this._trousersForm = value;
     }

     public get jacketForm(): JacketForm {
          return this._jacketForm;
     }

     set jacketForm(value: JacketForm) {
          this._jacketForm = value;
     }
}
