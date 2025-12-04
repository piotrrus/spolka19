import { CommonModule } from '@angular/common';
import {
     Component,
     OnInit,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Shoes } from '@features/stock-page/models/shoes.interface';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { ShoesForm } from '@shared/forms/shoes.form';

@Component({
     selector: 'app-shoes-form',
     templateUrl: './shoes-form.component.html',
     styleUrls: ['./shoes-form.component.scss'],
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
export class ShoesFormComponent extends BaseFormComponent implements OnInit {
     @Input() public set formData(formData: Shoes | null) {
          formData ? this.form.setFormValues(formData) : null;
          this.isFormValid.emit(this.form.form.valid);
     }

     @Input() public contractors: Contractor[] = [];
     @Output() public formChange = new EventEmitter<Shoes>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ShoesForm = new ShoesForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
