import { Injectable } from '@angular/core';
import { HTML_TABLE } from '../enums/html-table.enum';
import { BasePrintTableHelper } from './base-report-print-table.helper';
import { ReportData } from '../models/reports.interface';

@Injectable()
export class ReportdPrintTableHelper extends BasePrintTableHelper {
     private tableColumns: string[] = ['Miesiąc', 'Asortyment', 'Ilość', 'Wartość'];
     private totalValue: number = 0;
     private quantity: number = 0;

     public createReport(tableData: ReportData[], reportName: string): void {
          const rows: string = this.createTableRows(tableData);
          this.createPdfReport(reportName, this.tableColumns, rows);
     }

     private createTableRows(tableData: ReportData[]): string {
          let table = '';
          tableData.forEach((element) => {
               this.totalValue += Number(Math.round(element.price));
               this.quantity += Number(element.amount);
               const price = element.price ? element.price : '';

               table += "<tr style='border-bottom: 1px solid #e5eff8;'>";
               table += HTML_TABLE.TD.replace('$content', element.month);
               table += HTML_TABLE.TD.replace('$content', element.art_name);
               table += HTML_TABLE.TD.replace('$content', element.amount);
               table += HTML_TABLE.TD.replace('$content', price.toString());
               table += '</tr>';
          });
          table += '<tr>';
          table +=
               '<td style="border: 1px solid #ddd; colspan="4"></td><td style="border: 1px solid #ddd;">Suma całkowita:</td><td style="border: 1px solid #ddd;" colspan="1"></td>';
          table += '<td style="border: 1px solid #ddd;">' + this.totalValue + '</td>';
          table += '</tr>';
          return table;
     }
}
