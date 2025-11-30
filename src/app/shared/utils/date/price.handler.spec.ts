import { OrderedAssorts } from '@features/myorder-page/models/myorder.interface';
import { assortData } from '@features/myorder-page/stubs/ordered-assort.stub';
import { PriceHandler } from '@shared/utils/date/price.handler';

describe('PriceHandler', () => {
     const priceHandler = new PriceHandler();

     it('should be created handler', () => {
          expect(priceHandler).toBeTruthy();
     });

     describe('#PriceHandlerFunctions', () => {
          it('should be return proper formatDate value', () => {
               expect(priceHandler.getToPayAmount(100, 200, 10)).toEqual(90);
          });
          it('should be return wrong formatDate value', () => {
               expect(priceHandler.getRabatAmount(100, 10)).toEqual(90);
          });
          it('should be return wrong formatDate value', () => {
               const assorts: OrderedAssorts[] = [assortData];
               expect(priceHandler.getTotalPrice(assorts)).toEqual(1000);
          });
     });
});
