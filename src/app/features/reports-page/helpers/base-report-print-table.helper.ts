import { Injectable } from '@angular/core';
import { HTML_TABLE } from '../enums/html-table.enum';
import { REPORT_TITLES } from '../enums/report-titles.enum';
import { BasePrintHelper } from '@shared/helpers/base-print.helper';

@Injectable()
export abstract class BasePrintTableHelper extends BasePrintHelper {
     protected htmlToPdfmake = require('html-to-pdfmake');

     public createPdfReport(title: REPORT_TITLES | string, tableColumns: string[], tableRows: string): void {
          let html = this.reportContent(title, tableColumns, tableRows);
          html = this.htmlToPdfmake(html);
          const fileName = title.toLowerCase();
          const pdfFileName = `report-${fileName}`;
          this.createPdf(html, pdfFileName);
     }

     private createTitle(): string {
          return HTML_TABLE.TITLE.replace('$title', REPORT_TITLES.COMPANY);
     }

     private createReportTitle(reportTitle: REPORT_TITLES | string): string {
          return HTML_TABLE.REPORT_TITLE.replace('$title', reportTitle);
     }

     private createTable(tableColumns: string[], tableRows: string): string {
          const columns: string = this.createColumns(tableColumns);
          const tableBody: string = `${columns} ${tableRows}`;
          return HTML_TABLE.TABLE.replace('$tableBody', tableBody);
     }

     private createColumns(tableColumns: string[]): string {
          let htmlColumns = '';
          tableColumns.forEach((element) => {
               htmlColumns += `<th style="border: 1px solid #ddd;">${element}</th>`;
          });
          return HTML_TABLE.COLUMNS.replace('$columns', htmlColumns);
     }

     private reportContent(title: REPORT_TITLES | string, tableColumns: string[], tableRows: string): string {
          let html: string = this.createTitle();
          html += this.createReportTitle(title);
          html += this.createTable(tableColumns, tableRows);
          html += this.createReportFooter();
          return html;
     }

     private createReportFooter(): string {
          return `<div style="text-align: center; position: fixed; left:0; bottom: 0; text-size:12px:">
              Program magazynowy<br>Atelier Tomasz Ossoliński
          </div>`;
     }
}
