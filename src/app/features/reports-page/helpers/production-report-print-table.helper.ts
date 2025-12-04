import { Injectable } from '@angular/core';
import { HTML_TABLE } from '../enums/html-table.enum';
import { REPORT_TITLES } from '../enums/report-titles.enum';
import { BasePrintTableHelper } from './base-report-print-table.helper';
import { ProductionReportData } from '../models/reports.interface';

@Injectable()
export class ProductionReportdPrintTableHelper extends BasePrintTableHelper {
     private tableColumns: string[] = [
          'Nr kl.',
          'Nr prod.',
          'Asort.',
          'Dostawca',
          'Nr.tkan.',
          'Tonacja',
          'Podsz.',
          'Tydz.',
     ];

     public createReport(tableData: ProductionReportData[]): void {
          const rows: string = this.createTableRows(tableData);
          this.createPdfReport(REPORT_TITLES.REPORT_PRODUCTION, this.tableColumns, rows);
     }

     private createTableRows(tableData: ProductionReportData[]): string {
          let table = '';
          tableData.forEach((element) => {
               const prod_order = element.prod_order ? element.prod_order : '';
               const colors = element.tonacja ? element.tonacja : '';
               const productionDate = element.data_przek_do_prod_week ? element.data_przek_do_prod_week : '';
               const clientNr = element.client_nr ? element.client_nr : '';
               const lining = element.lining ? element.lining : '';

               table += "<tr style='border-bottom: 1px solid #e5eff8;'>";

               table += HTML_TABLE.TD.replace('$content', clientNr);
               table += HTML_TABLE.TD.replace('$content', prod_order);
               table += HTML_TABLE.TD.replace('$content', element.art_name);
               table += HTML_TABLE.TD.replace('$content', element.contractor);
               table += HTML_TABLE.TD.replace('$content', element.material_nr);
               table += HTML_TABLE.TD.replace('$content', colors);
               table += HTML_TABLE.TD.replace('$content', lining);
               table += HTML_TABLE.TD.replace('$content', productionDate);

               table += '</tr>';
          });
          table += '<tr>';
          return table;
     }
}
