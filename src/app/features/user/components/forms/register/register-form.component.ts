import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserRegister } from '@features/user/models/user.interface';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { RegisterForm } from '@shared/forms/register.form';

@Component({
     selector: 'app-register-form',
     templateUrl: './register-form.component.html',
     styleUrls: ['./register-form.component.scss'],
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
})
export class RegisterFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<UserRegister>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: RegisterForm = new RegisterForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
