import { Injectable } from '@angular/core';
import { HTML_TABLE } from '../enums/html-table.enum';
import { REPORT_TITLES } from '../enums/report-titles.enum';
import { BasePrintTableHelper } from './base-report-print-table.helper';
import { InventoryReportData } from '../models/reports.interface';

@Injectable()
export class InventoryReportdPrintTableHelper extends BasePrintTableHelper {
     private tableColumns: string[] = [
          'Asortyment',
          'Magazyn',
          'Dostawca',
          'Artykuł',
          'Ilość',
          'Cena zak.€',
          'Cena zak. zł',
          'Wartość',
     ];

     private totalValue: number = 0;
     private quantity: number = 0;

     public createReport(tableData: InventoryReportData[]): void {
          const rows: string = this.createTableRows(tableData);
          this.createPdfReport(REPORT_TITLES.REPORT_INVENTORY, this.tableColumns, rows);
     }

     private createTableRows(tableData: InventoryReportData[]): string {
          let table = '';
          tableData.forEach((element) => {
               this.totalValue += Number(Math.round(element.price));
               this.quantity += Number(element.quantity);
               const warehouse = element.warehouse ? element.warehouse : '';
               const quantity = element.quantity ? element.quantity : '';
               const price_euro = element.price_euro ? element.price_euro : '';

               table += "<tr style='border-bottom: 1px solid #e5eff8;'>";
               table += HTML_TABLE.TD.replace('$content', element.assort);
               table += HTML_TABLE.TD.replace('$content', warehouse);
               table += HTML_TABLE.TD.replace('$content', element.contractor);
               table += HTML_TABLE.TD.replace('$content', element.details);
               table += HTML_TABLE.TD.replace('$content', quantity);
               table += HTML_TABLE.TD.replace('$content', price_euro);
               table += HTML_TABLE.TD.replace('$content', element.buying_price);
               table += HTML_TABLE.TD.replace('$content', String(element.price));

               table += '</tr>';
          });
          table += '<tr style="border-bottom: 1px solid #e5eff8;">';
          table += '<td style="border: 1px solid #ddd"; colspan="4"></td>';
          table +=
               '<td style="border: 1px solid #ddd">Suma całkowita:</td><td style="border: 1px solid #ddd" colspan="2"></td>';
          table += HTML_TABLE.TD.replace('$content', String(this.totalValue));
          table += '</tr>';
          return table;
     }
}
