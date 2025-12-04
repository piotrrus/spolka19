import {
     Component,
     OnInit,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContractorForm } from '@shared/forms/contractor.form';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { Contractor } from '../../models/contractor.interface';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { distinctUntilChanged, tap } from 'rxjs';

@Component({
     selector: 'app-contractor-form',
     templateUrl: './contractor-form.component.html',
     styleUrls: ['./contractor-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
})
export class ContractorFormComponent extends BaseFormComponent implements OnInit {
     @Input() public set formData(formData: Contractor | null) {
          formData ? this.setFormValues(formData) : null;
          this.isFormValid.emit(this.form.form.valid);
     }

     @Output() public formChange = new EventEmitter<Contractor>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ContractorForm = new ContractorForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();

          this.form.form.valueChanges
               .pipe(
                    distinctUntilChanged(),
                    tap(() => {
                         console.log(
                              'touched ',
                              this.form.form.touched,
                              'dirty',
                              this.form.form.dirty
                         );
                    })
               )
               .subscribe();
     }

     private setFormValues(contractorData: Contractor): void {
          this.form.name?.setValue(contractorData.name);
          this.form.nip?.setValue(contractorData.nip);
          this.form.address?.setValue(contractorData.address);
          this.form.email?.setValue(contractorData.email);
          //  this.form.contactPersonA?.setValue(contractorData.contact_person_a);
          this.form.phone?.setValue(contractorData.phone);
          this.form.idGroup?.setValue(contractorData.id_group);
          console.log(this.form.form.touched, this.form.form.dirty);
          this.form.form.markAllAsTouched();
          console.log(this.form.form.touched, this.form.form.dirty);
     }
}
