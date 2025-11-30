import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalData } from './confirm-data.interface';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
     selector: 'app-confirm',
     templateUrl: './confirm-dialog.component.html',
     imports: [CommonModule, MatDialogModule, MatButtonModule],
     styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
     public messageTxt: string = this.data?.messageTxt;
     public continueTxt: string = this.data?.continueTxt;

     constructor(
          public dialogRef: MatDialogRef<ConfirmDialogComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ConfirmModalData
     ) {}

     public onConfirm(): void {
          this.dialogRef.close(true);
     }

     public onDismiss(): void {
          this.dialogRef.close(false);
     }
}
