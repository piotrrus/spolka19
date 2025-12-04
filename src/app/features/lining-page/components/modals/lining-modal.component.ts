import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Lining } from '../../models/lining.interface';
import { LiningModalData } from './lining-modal-data.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { LiningFormComponent } from '../forms/lining-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-lining-modal',
     templateUrl: './lining-modal.component.html',
     styleUrls: ['./lining-modal.component.scss'],

     imports: [CommonModule, MatIconModule, MatDialogModule, LiningFormComponent, MatButtonModule],
})
export class LiningModalComponent extends BaseModalComponent {
     public override formData: Lining = this.data.data;

     constructor(
          public override dialogRef: MatDialogRef<LiningModalData>,
          @Inject(MAT_DIALOG_DATA) public data: LiningModalData
     ) {
          super();
     }
}
