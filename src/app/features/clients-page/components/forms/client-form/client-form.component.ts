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
import { ClientForm } from '@shared/forms/client.form';
import { Client } from '@features/clients-page/models/client.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { tap } from 'rxjs';

@Component({
     selector: 'app-client-form',
     templateUrl: './client-form.component.html',
     styleUrls: ['./client-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class ClientFormComponent extends BaseFormComponent implements OnInit {
     @Input() set clientDetails(client: Client | null) {
          client ? this.form.form.patchValue(client) : null;
     }

     @Output() public formChange = new EventEmitter();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ClientForm = new ClientForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();

          this.form.form.valueChanges
               .pipe(
                    tap(() => {
                         console.log(this.form.form.touched, this.form.form.dirty);
                    })
               )
               .subscribe();
     }
}
