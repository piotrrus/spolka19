import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FeltsTableComponent } from './felts-table.component';
import { feltData } from '@features/felts-page/stubs/felts-table.stub';

describe('FeltsTableComponent', () => {
     let component: FeltsTableComponent;

     let fixture: ComponentFixture<FeltsTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [FeltsTableComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(FeltsTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Warehouses Table ', () => {
          it('should emit showDetails', () => {
               const spy = spyOn(component.showDetailsModal, 'emit');
               component.showDetails(feltData);
               expect(spy).toHaveBeenCalledWith(feltData);
          });
     });
});
