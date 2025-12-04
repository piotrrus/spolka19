import {
     Component,
     Input,
     ChangeDetectionStrategy,
     Output,
     EventEmitter,
     OnInit,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductionNrForm } from '@shared/forms/productionNr.form';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
     selector: 'app-production-nr-form',
     templateUrl: './production-nr-form.component.html',
     styleUrls: ['./production-nr-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule],
})
export class ProductionNrFormComponent extends BaseFormComponent implements OnInit {
     @Input() public set formData(formData: string | null) {
          if (formData) {
               this.form.prod_order?.setValue(formData);
               this.isFormValid.emit(this.form.form.valid);
          }
     }

     @Output() public formChange = new EventEmitter<string>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ProductionNrForm = new ProductionNrForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
