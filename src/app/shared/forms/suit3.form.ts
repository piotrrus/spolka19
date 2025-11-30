import { FormGroup } from '@angular/forms';
import { JacketForm } from './jacket.form';
import { TrousersForm } from './trousers.form';
import { VestForm } from './vest.form';
import { BaseForm } from './base.form';

export class Suit3Form extends BaseForm {
     private _jacketForm: JacketForm;
     private _trousersForm: TrousersForm;
     private _vestForm: VestForm;

     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               trousersForm: this._trousersForm,
               jacketForm: this._jacketForm,
               vestForm: this._vestForm,
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

     public get vestForm(): VestForm {
          return this._vestForm;
     }

     set vestForm(value: VestForm) {
          this._vestForm = value;
     }
}
