import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Assort } from '@features/stock-page/models/assort.interface';
import { AssortModalData } from '../../models/assort-modal-data.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';

@Component({
     selector: 'app-assorts-modal',
     templateUrl: './assorts-modal.component.html',
     styleUrls: ['./assorts-modal.component.scss'],
})
export class AssortsModalComponent extends BaseModalComponent {
     public override formData: Assort = this.data.data;
     public override isFormValid = false;

     public contractors: Contractor[];

     constructor(
          public override dialogRef: MatDialogRef<AssortsModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: AssortModalData
     ) {
          super();
          //dialogRef
     }
}
