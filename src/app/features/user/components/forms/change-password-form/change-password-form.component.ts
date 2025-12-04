import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserRegister } from '@features/user/models/user.interface';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { ChangePasswordForm } from '@shared/forms/change-password.form';

@Component({
     selector: 'app-change-password-form',
     templateUrl: './change-password-form.component.html',
     styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<UserRegister>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ChangePasswordForm = new ChangePasswordForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
