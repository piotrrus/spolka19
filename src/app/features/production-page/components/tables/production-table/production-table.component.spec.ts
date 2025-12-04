import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatIconModule } from '@angular/material/icon';
import { ProductionTableComponent } from './production-table.component';

describe('ProductionTableComponent', () => {
     let component: ProductionTableComponent;
     let fixture: ComponentFixture<ProductionTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [MatIconTestingModule, MatIconModule],
               declarations: [ProductionTableComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(ProductionTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should openClientMeasures method emit event', () => {
          const openModal = spyOn(component.openClientMeasures, 'emit');
          component.showClientMeasures(60);
          expect(openModal).toHaveBeenCalledTimes(1);
     });
     it('should openProductionDate method emit event', () => {
          const openModal = spyOn(component.openProductionDate, 'emit');
          component.showProductionDate(60);
          expect(openModal).toHaveBeenCalledTimes(1);
     });
     it('should openProductionFormModal method emit event', () => {
          const openModal = spyOn(component.openProductionFormModal, 'emit');
          component.showProductionFormModal(60);
          expect(openModal).toHaveBeenCalledTimes(1);
     });
     it('should openProductionNr method emit event', () => {
          const openModal = spyOn(component.openProductionNr, 'emit');
          component.showProductionNr(60);
          expect(openModal).toHaveBeenCalledTimes(1);
     });

     it('should emit navigateToProductionForm', () => {
          const spy = spyOn(component.navigateToProductionForm, 'emit');
          component.showProductionForm(1);
          expect(spy).toHaveBeenCalledWith(1);
     });
     it('should emit navigateToProductionForm', () => {
          const spy = spyOn(component.openPrintDescription, 'emit');
          component.printDescription(1);
          expect(spy).toHaveBeenCalledWith(1);
     });
     // it('should render warehouse table header', fakeAsync(() => {
     //      const compiled = fixture.debugElement.nativeElement;
     //      const data: Warehouse[] = [
     //           {
     //                id: 1,
     //                name: 'pierwszy',
     //                address: 'gdanska 123',
     //                factory: 'zzz',
     //                phone: '222222',
     //           },
     //      ];
     //      component.newTableData$ = of(data);
     //      fixture.detectChanges();
     //      tick(1000);
     //      expect(compiled.querySelector('app-table-header')?.textContent).toContain('Lista magazynów'); //OK
     // }));
});
