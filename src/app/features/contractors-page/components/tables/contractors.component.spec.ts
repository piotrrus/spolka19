import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ContractorsTableComponent } from './contractors-table.component';
import { contractorData } from '@features/contractors-page/stubs/contractors-table.stub';

describe('ContractorsTableComponent', () => {
     let component: ContractorsTableComponent;

     let fixture: ComponentFixture<ContractorsTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [ContractorsTableComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(ContractorsTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Contractors Table ', () => {
          it('should emit showDetails', () => {
               const spy = spyOn(component.showDetailsModal, 'emit');
               component.showDetails(contractorData);
               expect(spy).toHaveBeenCalledWith(contractorData);
          });

          // it('should render title', () => {
          //      fixture.detectChanges();
          //      const compiled = fixture.debugElement.nativeElement;
          //      expect(compiled.querySelector('app-table-header').textContent).toContain('Lista zamówień');
          // });
     });
});
