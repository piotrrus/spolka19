import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatIconModule } from '@angular/material/icon';
import { ArchivesTableComponent } from './archives-table.component';

describe('ArchivesTableComponent', () => {
     let component: ArchivesTableComponent;
     let fixture: ComponentFixture<ArchivesTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [MatIconTestingModule, MatIconModule],
               declarations: [ArchivesTableComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(ArchivesTableComponent);
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
});
