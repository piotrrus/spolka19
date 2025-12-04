import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Shoes } from '@features/stock-page/models/shoes.interface';
import { ShoesModalData } from '../../../models/shoes-modal-data.interface';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ShoesFormComponent } from '../../forms/shoes/shoes-form.component';

@Component({
     selector: 'app-shoes-modal',
     templateUrl: './shoes-modal.component.html',
     styleUrls: ['./shoes-modal.component.scss'],
     imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule, ShoesFormComponent],
})
export class ShoesModalComponent extends BaseModalComponent {
     public override formData: Shoes = this.data.shoes;
     // public isFormValid = false;
     public contractors: Contractor[];

     constructor(
          public override dialogRef: MatDialogRef<ShoesModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ShoesModalData
     ) {
          super();
          this.formData = this.data.shoes;
          this.contractors = this.data.contractors;
     }

     // public onFormChange($event: Shoes): void {
     //      $event ? (this.formData = $event) : null;
     // }

     // public onFormValid($event: boolean): void {
     //      this.isFormValid = $event;
     // }

     // public onSave(): void {
     //      this.dialogRef.close(this.formData);
     // }

     // public onClose(): void {
     //      this.dialogRef.close(false);
     // }
}
