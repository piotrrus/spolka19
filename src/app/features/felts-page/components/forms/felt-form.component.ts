import {
     Component,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
     OnInit,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeltForm } from '@shared/forms/felt.form';
import { Felt } from '../../models/felt.interface';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
     selector: 'app-felt-form',
     templateUrl: './felt-form.component.html',
     styleUrls: ['./felt-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
})
export class FeltFormComponent extends BaseFormComponent implements OnInit {
     @Input() set formData(formData: Felt | null) {
          formData ? this.form.name?.setValue(formData.name) : null;
          this.isFormValid.emit(this.form.form.valid);
     }

     @Output() public formChange = new EventEmitter<Felt>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: FeltForm = new FeltForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
