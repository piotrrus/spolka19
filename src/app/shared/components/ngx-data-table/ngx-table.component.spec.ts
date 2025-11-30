import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxTableComponent } from './ngx-data-table.component';

describe('NgxTableComponent', () => {
     let component: NgxTableComponent;

     let fixture: ComponentFixture<NgxTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [NgxTableComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(NgxTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     // describe('#Stock Table ', () => {
     //      // it('should emit showDetails', () => {
     //      //      const spy = spyOn(component.articleDetails, 'emit');
     //      //      component.openArticleDetails(1);
     //      //      expect(spy).toHaveBeenCalledTimes(1);
     //      // });

     //      it('should emit showDetails', () => {
     //           const spy = spyOn(component.contractorDetails, 'emit');
     //           component.openContractorDetails(1);
     //           expect(spy).toHaveBeenCalledTimes(1);
     //      });

     //      it('should emit onMoveToStock', () => {
     //           const spy = spyOn(component.moveToStock, 'emit');
     //           component.onMoveToStock(1);
     //           expect(spy).toHaveBeenCalledTimes(1);
     //      });

     //      it('should render stock table', fakeAsync(() => {
     //           const compiled = fixture.debugElement.nativeElement;
     //           const data: Stock[] = stockData;
     //           component.tableData = data;
     //           fixture.detectChanges();
     //           tick(1000);
     //           expect(compiled.querySelector('ngx-datatable')?.textContent).toBeTruthy();
     //      }));
     //});
});
