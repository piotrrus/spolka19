import { OrderedAssorts } from '@features/myorder-page/models/myorder.interface';

export class PriceHandler {
     public getTotalPrice(assorts: OrderedAssorts[]): number {
          return assorts
               .map((o) => Number(o.price))
               .reduce((a, c) => {
                    return a + c;
               });
     }

     public getToPayAmount(downPayment: number, totalPrice: number, rabat: number): number {
          const rabatAmount: number = Number(this.getRabatAmount(totalPrice, rabat));
          return totalPrice - rabatAmount - downPayment;
     }

     public getRabatAmount(totalPrice: number, rabat: number): number {
          return rabat ? (Number(totalPrice) * Number(rabat)) / 100 : 0;
     }
}
