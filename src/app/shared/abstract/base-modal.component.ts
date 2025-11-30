import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
     template: '',
})
export abstract class BaseModalComponent {
     public isFormValid = false;

     public formData: unknown;

     protected dialogRef: MatDialogRef<unknown> = inject(MatDialogRef);

     public onFormChange($event: unknown | null): void {
          $event ? (this.formData = $event) : null;
     }

     public onFormValid($event: boolean): void {
          this.isFormValid = $event;
     }

     public onSave(): void {
          this.dialogRef.close(this.formData);
     }

     public onClose(): void {
          this.dialogRef.close(false);
     }
}
