import {
     Component,
     OnInit,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarehouseForm } from '@shared/forms/warehouse.form';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-warehouse-form',
     templateUrl: './warehouse-form.component.html',
     styleUrls: ['./warehouse-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [
          CommonModule,
          FormsModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatInputModule,
          MatButtonModule,
     ],
})
export class WarehouseFormComponent extends BaseFormComponent implements OnInit {
     @Input() set formData(formData: Warehouse | null) {
          formData ? this.form.form.patchValue(formData) : null;
          // this.isFormValid.emit(this.form.valid);
     }

     @Output() public formChange = new EventEmitter<Warehouse>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: WarehouseForm = new WarehouseForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }
     public get formx(): FormGroup {
          return this.form.form;
     }
     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
