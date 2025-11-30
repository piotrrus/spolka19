import {
     Component,
     DestroyRef,
     EventEmitter,
     inject,
     output,
     OutputEmitterRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorMsgService } from '@shared/forms/errors/error-msg.service';
import { distinctUntilChanged, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
     template: '',
})
export abstract class BaseFormComponent {
     abstract form: { form: FormGroup };
     abstract formChange: EventEmitter<any>; //unknown
     abstract isFormValid: EventEmitter<boolean>;

     public isFormValidz: OutputEmitterRef<boolean> = output<boolean>();
     public formChangez: OutputEmitterRef<unknown> = output<unknown>();

     private validationService = new ErrorMsgService();
     private readonly destroyRef = inject(DestroyRef);
     public checkFormAndEmit(): void {
          this.form.form.valueChanges
               .pipe(
                    distinctUntilChanged(),
                    tap(() => {
                         if (this.form.form.valid) {
                              this.formChange.emit(this.form.form.getRawValue());
                         }
                         this.isFormValid.emit(this.form.form.valid);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public getErrorMessage(validatorName: string): string {
          return this.validationService.getValidatorErrorMessage(validatorName);
     }
}
