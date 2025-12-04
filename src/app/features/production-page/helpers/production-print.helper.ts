import { Injectable } from '@angular/core';
import { HTML_TABLE } from '@features/reports-page/enums/html-table.enum';
import { BasePrintHelper } from '@shared/helpers/base-print.helper';
import { Content } from 'pdfmake/interfaces';
import { DESCRIPTIONS } from '../enums/descriptions.enum';
import { ProductionDescriptionModel } from '../models/production-description.model';

@Injectable()
export class ProductionPrintHelper extends BasePrintHelper {
     protected htmlToPdfmake = require('html-to-pdfmake');
     // private reportTitle = 'Tomasz Ossoliński Daily';

     private tableColumns: string[] = [
          'Lp.',
          'Nr klienta',
          'Zlec',
          'Asort.',
          'Tkanina',
          'Tonacja',
          'Skład',
          'Nr.tkan.',
          'Podszewka',
          'Mar. mod.',
          'Mar. wył.',
          'Mar. guz.',
          'Mar. kieszenie',
          'Mar. rozp.',
          'Sp. mod.	',
          'Sp. kiesz.',
          'Kamizelka mod.',
          'Uwagi',
     ];

     // private createDescriptionTitle(): string {
     //      return HTML_TABLE.PRODUCTION_DESCRIPTION_TITLE.replace('$title', this.reportTitle);
     // }

     public weekPdf(tableData: ProductionDescriptionModel[], week: string): void {
          const content = [];
          const tableRows: string = this.createTableRows(tableData);

          // let html: string = ""; //this.createDescriptionTitle();
          // let htmlTable = this.createColumns(this.tableColumns);
          // htmlTable += this.createTable(tableRows);
          let htmlTable = this.createTable(tableRows);
          htmlTable += this.createReportFooter();
          const table = this.htmlToPdfmake(htmlTable);

          let head = '<head>';
          head += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
          head +=
               '<link rel="stylesheet" type="text/css" href="../public/css/templatemo_style.css">';
          head += '<link rel="stylesheet" type="text/css" href="../public/css/rap_table.css">';
          head += '</head>';
          const htmlHead = this.htmlToPdfmake(head);
          content.push(htmlHead);
          // content.push(this.createDescriptionTitle());
          content.push(this.createTitleSection());
          content.push(this.createSubTitleSection(week));
          content.push(table);
          const pdfFileName = `produkcja_tydzień_${week}`;
          this.createPdf(content, pdfFileName);
     }

     private createTable(tableRows: string): string {
          const columns: string = this.createColumns(this.tableColumns);
          const tableBody: string = `${columns} ${tableRows}`;
          return HTML_TABLE.PRODUCTION_DESCRIPTION_TABLE.replace('$tableBody', tableBody);
     }

     private createTableRows(tableData: ProductionDescriptionModel[]): string {
          let table = '';
          let m = 0;
          tableData.forEach((element) => {
               const jacketModel = element.marynarka_model ? element.marynarka_model : '';
               const trousersModel = element.spodnie_model ? element.spodnie_model : '';
               const vestModel = element.model ? element.model : '';

               const jacketWylogi = element.marynarka_wylogi ? element.marynarka_wylogi : '';
               const jacketButtonsNr = element.marynarka_ilosc_guzikow
                    ? element.marynarka_ilosc_guzikow
                    : '';
               const jacketPockets = element.marynarka_kieszen ? element.marynarka_kieszen : '';
               const jacketFliesNr = element.marynarka_ilosc_rozporkow
                    ? element.marynarka_ilosc_rozporkow
                    : '';

               // const trousersPockets = element.spodnie_kieszen ? element.spodnie_kieszen : '';

               const fabricComposition = element.fabric_composition
                    ? element.fabric_composition
                    : '';
               const tonacja = element.tonacja ? element.tonacja : '';

               const lining = element.lining ? element.lining : '';
               const notices = element.notices ? element.notices : '';

               table += "<tr style='border-bottom: 1px solid #e5eff8;'>";
               table += HTML_TABLE.TD.replace('$content', m.toString());
               table += HTML_TABLE.TD.replace('$content', element.client_nr);
               table += HTML_TABLE.TD.replace('$content', element.invoice_nr);
               table += HTML_TABLE.TD.replace('$content', element.clothe_type);

               table += HTML_TABLE.TD.replace('$content', element.contractor);
               table += HTML_TABLE.TD.replace('$content', tonacja);
               table += HTML_TABLE.TD.replace('$content', fabricComposition);

               table += HTML_TABLE.TD.replace('$content', element.material_nr);
               table += HTML_TABLE.TD.replace('$content', lining);

               table += HTML_TABLE.TD.replace('$content', jacketModel);
               table += HTML_TABLE.TD.replace('$content', jacketWylogi.toString());
               table += HTML_TABLE.TD.replace('$content', jacketButtonsNr.toString());
               table += HTML_TABLE.TD.replace('$content', jacketPockets);
               table += HTML_TABLE.TD.replace('$content', jacketPockets);

               table += HTML_TABLE.TD.replace('$content', trousersModel);
               table += HTML_TABLE.TD.replace('$content', jacketFliesNr.toString());

               table += HTML_TABLE.TD.replace('$content', vestModel);
               table += HTML_TABLE.TD.replace('$content', notices);

               table += '</tr>';
               m++;
          });
          return table;
     }

     private createColumns(tableColumns: string[]): string {
          let htmlColumns = '';
          tableColumns.forEach((element) => {
               htmlColumns += `<th style="border: 1px solid #ddd;">${element}</th>`;
          });
          return HTML_TABLE.COLUMNS.replace('$columns', htmlColumns);
     }

     private createReportFooter(): string {
          return `<div style="text-align: center; position: fixed; bottom: 0; text-size:10px:">
              Program magazynowy<br>Atelier Tomasz Ossoliński
          </div>`;
     }

     private createTitleSection(): Content {
          return [
               {
                    text: DESCRIPTIONS.TITLE,
                    style: 'header',
               },
          ];
     }

     private createSubTitleSection(week: string): Content {
          return [
               {
                    text: `produkcja tydzień: ${week}`,
                    style: 'subheader',
               },
          ];
     }
}

// export function createTitleSection(): Content {
//      return [
//           {
//                text: `Tomasz Ossoliński Daily`,
//                style: 'header',
//           },
//      ];
// }

// export function createSubTitleSection(week: string): Content {
//      return [
//           {
//                text: `produkcja tydzień: ${week}`,
//                style: 'subheader',
//           },
//      ];
// }
