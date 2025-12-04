import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StockTableComponent } from './stock-table.component';
import { stockData } from '@features/stock-page/stubs/stock-table.stub';
import { Stock } from '@features/stock-page/models/stock.interface';

describe('StockTableComponent', () => {
     let component: StockTableComponent;

     let fixture: ComponentFixture<StockTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [StockTableComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(StockTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Stock Table ', () => {
          // it('should emit showDetails', () => {
          //      const spy = spyOn(component.articleDetails, 'emit');
          //      component.openArticleDetails(1);
          //      expect(spy).toHaveBeenCalledTimes(1);
          // });

          it('should emit showDetails', () => {
               const spy = spyOn(component.contractorDetails, 'emit');
               component.openContractorDetails(1);
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should emit onMoveToStock', () => {
               const spy = spyOn(component.moveToStock, 'emit');
               component.onMoveToStock(1);
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should render stock table', fakeAsync(() => {
               const compiled = fixture.debugElement.nativeElement;
               const data: Stock[] = stockData;
               component.tableData = data;
               fixture.detectChanges();
               tick(1000);
               expect(compiled.querySelector('ngx-datatable')?.textContent).toBeTruthy();
          }));
     });
});
