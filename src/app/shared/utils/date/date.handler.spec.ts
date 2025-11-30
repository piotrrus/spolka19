import { DateHandler } from '@shared/utils/date/date.handler';

describe('DateHandler', () => {
     const dateHandler = DateHandler;

     it('should be created handler', () => {
          expect(dateHandler).toBeTruthy();
     });

     it('should be call maxDate  method', () => {
          const spy = spyOn(dateHandler, 'maxDate');
          dateHandler.maxDate();
          expect(spy).toHaveBeenCalled();
     });

     it('should be call minDate  method', () => {
          const spy = spyOn(dateHandler, 'minDate');
          dateHandler.minDate();
          expect(spy).toHaveBeenCalled();
     });
     describe('#DateHandlerFunctions', () => {
          it('should be return proper formatDate value', () => {
               expect(dateHandler.formatDate('2025-01-04 12:00')).toEqual('2025-01-04');
          });
          it('should be return wrong formatDate value', () => {
               expect(dateHandler.formatDate('99-01-04')).not.toEqual('2025-01-04');
          });

          it('should be return proper values with isPastDate  method', () => {
               expect(dateHandler.isPastDate('2025-01-04 12:00')).toBeFalsy();
               expect(dateHandler.isPastDate('2024-01-04 12:00')).toBeTruthy();
          });

          it('should be return proper values with compareDates method ', () => {
               expect(dateHandler.compareDates('2025-01-04', '2025-01-04')).toBeFalsy();
               expect(dateHandler.compareDates('2022-01-04', '2024-01-04')).toBeTruthy();
          });

          it('should be return proper currentDate value', () => {
               expect(dateHandler.currentDate()).toContain('2025');
          });

          it('should be return proper minDate value', () => {
               expect(dateHandler.minDate()).toBeDefined();
          });

          it('should be return proper maxDate value', () => {
               expect(dateHandler.maxDate()).toBeDefined();
          });

          it('should be return proper maxDate value', () => {
               expect(dateHandler.calendarRange()).toBeDefined();
          });
     });
});
