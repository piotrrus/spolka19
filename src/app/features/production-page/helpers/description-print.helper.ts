import { Injectable } from '@angular/core';
import { Content, ContentCanvas } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../models/production-description.model';
import { createFabricSection } from './descriptions/fabric.desription.function';
import { createHeaderSection } from './descriptions/header.desription.function';
import { ProductionPrintAssortsStrategy } from './description-print-assorts.strategy';
import { BasePrintHelper } from '@shared/helpers/base-print.helper';

@Injectable()
export class DescriptionPrintHelper extends BasePrintHelper {
     private content: Content;

     public generatePdf(data: ProductionDescriptionModel): void {
          this.content = [];

          this.content.push(createHeaderSection(data));
          // this.content.push(this.horizontalLine());
          this.content.push(ProductionPrintAssortsStrategy.generateList(data));

          this.content.push({ text: 'Filc ' + data.felt ? data.felt : '', style: 'list' });

          this.content.push(createFabricSection(data));

          // this.content.push(this.footer());

          const pdfFileName = data.prod_order ? data.prod_order : data.client_nr;
          this.createPdf(this.content, pdfFileName);
     }

     private horizontalLine(): ContentCanvas {
          return {
               canvas: [
                    {
                         type: 'line',
                         lineColor: 'grey',
                         x1: 0,
                         y1: 5,
                         x2: 595 - 2 * 40,
                         y2: 5,
                         lineWidth: 1,
                    },
               ],
          };
     }

     private footer(): any {
          return {
               footer: [
                    {
                         margin: [40, 10, 40, 10],
                         columns: [
                              [
                                   {
                                        text: 'Rockstar',
                                        fontSize: 16,
                                        color: '#229C81',
                                        bold: true,
                                   },
                              ],
                              [
                                   {
                                        text: '505 St Catherine St E, Montreal, Quebec H2L 2C9',
                                        fontSize: 10,
                                        bold: true,
                                   },
                              ],
                              [
                                   {
                                        text: 'Email: info@rockstar.cd',
                                        fontSize: 10,
                                        bold: true,
                                   },
                                   {
                                        text: 'Phone: +243 975 600 109',
                                        fontSize: 10,
                                        bold: true,
                                   },
                                   {
                                        text: 'Web: www.rockstar.cd',
                                        fontSize: 10,
                                        bold: true,
                                   },
                              ],
                         ],
                    },
               ],
          };
     }
}
