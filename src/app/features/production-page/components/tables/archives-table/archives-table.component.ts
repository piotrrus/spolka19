import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Production } from '@features/production-page/models/production.interface';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-archives-table',
     templateUrl: './archives-table.component.html',
     styleUrls: ['./archives-table.component.scss'],
     imports: [CommonModule, NgxDatatableModule],
})
export class ArchivesTableComponent {
     @Input() tableData: Production[] | null;
     @Input() week: number;
     @Output() public openClientMeasures = new EventEmitter<number>();
     @Output() public openProductionDate = new EventEmitter<number>();
     @Output() public openProductionFormModal = new EventEmitter<number>();
     @Output() public navigateToProductionForm = new EventEmitter<number>();
     @Output() public openProductionNr = new EventEmitter<number>();

     @Output() public openPrintDescription = new EventEmitter<number>();

     public showClientMeasures($id: number): void {
          this.openClientMeasures.emit($id);
     }

     public showProductionDate($id: number): void {
          this.openProductionDate.emit($id);
     }

     public showProductionForm($id: number): void {
          this.navigateToProductionForm.emit($id);
     }

     public showProductionFormModal($id: number): void {
          this.openProductionFormModal.emit($id);
     }

     public showProductionNr($id: number): void {
          this.openProductionNr.emit($id);
     }

     public printDescription($id: number): void {
          this.openPrintDescription.emit($id);
     }
}
