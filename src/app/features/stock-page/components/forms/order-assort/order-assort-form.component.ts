import {
     Component,
     OnInit,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { AssortsForm } from '@shared/forms/assorts.form';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { AssortList } from '@features/assorts-page/models/assorts.interface';
import { Assort } from '@features/stock-page/models/assort.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
     selector: 'app-order-assort-form',
     templateUrl: './order-assort-form.component.html',
     styleUrls: ['./order-assort-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [
          CommonModule,
          FormsModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatInputModule,
          MatSelectModule,
     ],
})
export class OrderAssortFormComponent extends BaseFormComponent implements OnInit {
     @Input() public set formData(formData: Assort | null) {
          formData ? this.form.setFormValues(formData) : null;
          this.isFormValid.emit(this.form.form.valid);
     }

     @Input() public contractors: Contractor[];
     @Input() public assorts: AssortList[];

     @Output() public formChange = new EventEmitter<Assort>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: AssortsForm = new AssortsForm(this.fb);
     public disabled = true;
     disableSelect = new FormControl(false);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     public onDisable($event: MatCheckboxChange): void {
          console.log($event.checked);
          if ($event.checked) {
               this.form.form.disable();
          } else {
               this.form.form.enable();
          }
          this.form.form.updateValueAndValidity();
     }
}
