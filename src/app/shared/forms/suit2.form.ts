import { FormGroup } from '@angular/forms';
import { JacketForm } from './jacket.form';
import { TrousersForm } from './trousers.form';
import { BaseForm } from './base.form';

export class Suit2Form extends BaseForm {
     private _jacketForm: JacketForm;
     private _trousersForm: TrousersForm;

     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               trousersForm: this._trousersForm,
               jacketForm: this._jacketForm,
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
