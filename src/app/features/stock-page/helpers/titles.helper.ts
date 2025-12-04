import { StockFabricStatus, StockOptionTitles } from '../enums/stock-options.enum';

export class StockTablesTitles {
     public static getTitle(option: string): string {
          const title = this.prepareTitle(option);
          if (title === 'returned') {
               return StockFabricStatus.RETURNED;
          } else if (title === 'runout') {
               return StockFabricStatus.RUNOUT;
          } else if (title === 'ordered_mat') {
               return StockFabricStatus.ORDERED_MAT;
          } else {
               return StockFabricStatus.ALL;
          }
     }

     private static prepareTitle(title: string): string {
          if (title.includes(StockFabricStatus.RETURNED)) {
               return StockFabricStatus.RETURNED;
          } else if (title.includes(StockOptionTitles.ORDERED_MAT)) {
               return StockFabricStatus.ORDERED_MAT;
          } else if (title.includes(StockOptionTitles.RUNOUT)) {
               return StockFabricStatus.RUNOUT;
          } else {
               return StockFabricStatus.ALL;
          }
     }
}
