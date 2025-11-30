import {
     ChangeDetectionStrategy,
     Component,
     EventEmitter,
     Input,
     OnInit,
     Output,
} from '@angular/core';
import { BaseFormComponent } from '../../abstract/base-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Notice } from '@shared/forms/notice.form';
import { Notices, OrderedAssorts } from '@features/myorder-page/models/myorder.interface';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
     selector: 'app-notice-form',
     templateUrl: './notice-form.component.html',
     styleUrls: ['./notice-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, TextFieldModule],
})
export class NoticeFormComponent extends BaseFormComponent implements OnInit {
     @Input() set orderedAssorts(orderedAssorts: OrderedAssorts | null) {
          orderedAssorts?.notices ? this.form.notices?.setValue(orderedAssorts?.notices) : null;
          // this.isFormValid.emit(this.form.form.valid);
     }

     @Output() public formChange = new EventEmitter<Notices>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: Notice = new Notice(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
