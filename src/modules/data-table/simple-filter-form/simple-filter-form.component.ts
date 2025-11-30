import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { SimpleFilterForm } from '@shared/forms/simple-filter.form';

@Component({
     selector: 'app-simple-filter-form',
     templateUrl: './simple-filter-form.component.html',
     styleUrls: ['./simple-filter-form.component.scss'],
     // imports: [Form MatIconModule, MatFormFieldModule, MatInputModule],
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
})
export class SimpleFilterFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form = new SimpleFilterForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     public removeText(): void {
          this.form.searchedText?.setValue('');
     }
}
