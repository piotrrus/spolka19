import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginForm } from '@shared/forms/login.form';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { UserLogin } from '@features/user/models/user.interface';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
     selector: 'app-login-form',
     templateUrl: './login-form.component.html',
     styleUrls: ['./login-form.component.scss'],
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
})
export class LoginFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<UserLogin>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form = new LoginForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
