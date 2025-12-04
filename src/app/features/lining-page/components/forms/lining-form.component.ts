import {
     Component,
     OnInit,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { LiningForm } from '@shared/forms/lining.form';
import { Lining } from '../../models/lining.interface';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
     selector: 'app-lining-form',
     templateUrl: './lining-form.component.html',
     styleUrls: ['./lining-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
})
export class LiningFormComponent extends BaseFormComponent implements OnInit {
     @Input() public set formData(formData: Lining | null) {
          formData ? this.form.name?.setValue(formData.name) : null;
          this.isFormValid.emit(this.form.form.valid);
     }

     @Output() public formChange = new EventEmitter<Lining>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: LiningForm = new LiningForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
