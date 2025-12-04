import {
     ChangeDetectionStrategy,
     Component,
     EventEmitter,
     Input,
     OnInit,
     Output,
} from '@angular/core';
import { Role, User } from '@features/admin-page/models/user.interface';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { UserForm } from '@shared/forms/user.form';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
     selector: 'app-user-form',
     templateUrl: './user-form.component.html',
     styleUrls: ['./user-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
})
export class UserFormComponent extends BaseFormComponent implements OnInit {
     @Input() set user(user: User | null) {
          user ? this.form.form.patchValue(user) : null;
     }

     @Input() roles: Role[] | null;

     @Output() public formChange = new EventEmitter<User>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: UserForm = new UserForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
