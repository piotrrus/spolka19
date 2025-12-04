import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarehousesTableComponent } from './warehouses-table.component';
import { warehouseData } from '../../stubs/warehouse-table.stub';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

describe('WarehousesTableComponent', () => {
     let component: WarehousesTableComponent;

     let fixture: ComponentFixture<WarehousesTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [WarehousesTableComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(WarehousesTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Warehouses Table ', () => {
          it('should emit showDetails', () => {
               const spy = spyOn(component.openDetailsModal, 'emit');
               component.showDetails(warehouseData);
               expect(spy).toHaveBeenCalledWith(warehouseData);
          });
     });

     // it('should render title', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('app-table-header').textContent).toContain('Lista zamówień');
     // });
});
