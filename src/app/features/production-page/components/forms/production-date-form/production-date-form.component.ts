import { CommonModule } from '@angular/common';
import {
     ChangeDetectionStrategy,
     Component,
     EventEmitter,
     Input,
     OnInit,
     Output,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { ProductionDateForm } from '@shared/forms/productionDate.form';

@Component({
     selector: 'app-production-date-form',
     templateUrl: './production-date-form.component.html',
     styleUrls: ['./production-date-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
})
export class ProductionDateFormComponent extends BaseFormComponent implements OnInit {
     @Input() public set formData(formData: string | null) {
          if (formData) {
               this.checkFormAndEmit();
               this.form.data_przek_do_prod?.setValue(formData);
          }
     }

     @Output() public formChange = new EventEmitter<string>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ProductionDateForm = new ProductionDateForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
