import { Content } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../models/production-description.model';
import { ASSORTS } from '../enums/assorts.enum';
import { DESCRIPTIONS } from '../enums/descriptions.enum';
import { createTrousersSection } from './descriptions/trousers.desription.function';
import { createVestSection } from './descriptions/vest.desription.function';
import { createSizeJacketSection } from './descriptions/jacket-size.desription.function';
import { createJacketCommonSection } from './descriptions/jacket-common.desription.function';
import { createSmokingSection } from './descriptions/smoking.desription.function';

export class ProductionPrintAssortsStrategy {
     private static content: Content;

     public static generateList(data: ProductionDescriptionModel): Content {
          this.content = [];
          const assortId = data.id_assort;

          switch (assortId) {
               case ASSORTS.SHORTS || ASSORTS.TROUSERS: {
                    this.content.push(createTrousersSection(data));
                    break;
               }
               case ASSORTS.VEST: {
                    this.content.push(createVestSection(data));
                    break;
               }
               case ASSORTS.COAT: {
                    this.content.push({ text: DESCRIPTIONS.COAT, style: 'list' });
                    break;
               }
               case ASSORTS.SMOKING2 || ASSORTS.SUIT2: {
                    this.content.push(createSizeJacketSection(data));
                    this.content.push(createSmokingSection());
                    this.content.push(createJacketCommonSection(data));
                    this.content.push(createTrousersSection(data));
                    break;
               }
               case ASSORTS.SMOKING3 || ASSORTS.SUIT3: {
                    this.content.push(createSizeJacketSection(data));
                    this.content.push(createSmokingSection());
                    this.content.push(createJacketCommonSection(data));
                    this.content.push(createVestSection(data));
                    this.content.push(createTrousersSection(data));
                    break;
               }
               case ASSORTS.JACKET: {
                    this.content.push(createSizeJacketSection(data));
                    this.content.push(createJacketCommonSection(data));
                    break;
               }
          }
          return this.content;
     }
}
