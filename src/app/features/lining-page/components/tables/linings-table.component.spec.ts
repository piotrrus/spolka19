import { ComponentFixture, TestBed } from '@angular/core/testing';
import { liningsData } from '../../stubs/linings-table.stub';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LiningTableComponent } from './linings-table.component';
import { LiningsDataTableColumns } from './lining-data-table-columns';
import { TableColumns } from '@shared/interfaces/table-columns.interface';

describe('LiningTableComponent', () => {
     let component: LiningTableComponent;

     let fixture: ComponentFixture<LiningTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [LiningTableComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(LiningTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Lining Table ', () => {
          it('should emit showDetails', () => {
               const spy = spyOn(component.openDetailsModal, 'emit');
               component.showDetails(liningsData);
               expect(spy).toHaveBeenCalledWith(liningsData);
          });

          it('should table has a columns', () => {
               const tableColumns: TableColumns[] = LiningsDataTableColumns;
               expect(component.dataTableColumns).toEqual(tableColumns);
          });

          // it('should render title', () => {
          //      fixture.detectChanges();
          //      const compiled = fixture.debugElement.nativeElement;
          //      expect(compiled.querySelector('app-table-header').textContent).toContain('Lista zamówień');
          // });

          // it('should openClientMeasures method emit event', () => {
          //      const openModal = spyOn(component.openClientMeasures, 'emit');
          //      component.showClientMeasures(60);
          //      expect(openModal).toHaveBeenCalledTimes(1);
          // });
          // it('should openProductionDate method emit event', () => {
          //      const openModal = spyOn(component.openProductionDate, 'emit');
          //      component.showProductionDate(60);
          //      expect(openModal).toHaveBeenCalledTimes(1);
          // });
          // it('should openProductionFormModal method emit event', () => {
          //      const openModal = spyOn(component.openProductionFormModal, 'emit');
          //      component.showProductionFormModal(60);
          //      expect(openModal).toHaveBeenCalledTimes(1);
          // });
          // it('should openProductionNr method emit event', () => {
          //      const openModal = spyOn(component.openProductionNr, 'emit');
          //      component.showProductionNr(60);
          //      expect(openModal).toHaveBeenCalledTimes(1);
          // });
     });
});
