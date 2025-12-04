import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-production-report',
     templateUrl: './production-report.component.html',
     styleUrls: ['./production-report.component.scss'],
     imports: [CommonModule, NgxDatatableModule],
})
export class ProductionReportComponent {}
