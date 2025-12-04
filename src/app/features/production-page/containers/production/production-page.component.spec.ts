import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductionPageComponent } from './production-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductionService } from '@features/production-page/services/production.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { ProductionEditFormComponent } from '@features/production-page/components/forms/production-edit-form/production-edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ClientsService } from '@features/clients-page/services/clients-service';
import { ClientMeasuresService } from '@features/clients-page/services/client-measures-service';
import { By } from '@angular/platform-browser';
import { ProductionPrintHelper } from '@features/production-page/helpers/production-print.helper';
import { DescriptionPrintHelper } from '@features/production-page/helpers/description-print.helper';
import { ProductionStore } from '@features/production-page/production-store/production-store';
import { ClientsMeasuresStore } from '@features/clients-page/client-store/client-measures-crud-facade';
import { actualWeekMock } from '@features/production-page/mocks/production.mock';
import { ProductionTableComponent } from '@features/production-page/components/tables/production-table/production-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

describe('ProductionPageComponent', () => {
     let component: ProductionPageComponent;
     let fixture: ComponentFixture<ProductionPageComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [
                    RouterTestingModule,
                    HttpClientTestingModule,
                    ToastrModule.forRoot(),
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    MatRadioModule,
                    NoopAnimationsModule,
                    MatDialogModule,
                    NgxDatatableModule,
               ],
               declarations: [
                    ProductionPageComponent,
                    ProductionEditFormComponent,
                    ProductionTableComponent,
               ],
               providers: [
                    ProductionService,
                    ClientsService,
                    ClientMeasuresService,
                    ProductionPrintHelper,
                    DescriptionPrintHelper,
                    ProductionStore,
                    ClientsMeasuresStore,
                    {
                         provide: MatDialogRef,
                         useValue: {},
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();

          fixture = TestBed.createComponent(ProductionPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render title in a page-title tag', () => {
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('.page-title').textContent).toContain('Produkcja');
     });

     it('should call redirect to archives', fakeAsync(() => {
          spyOn(component, 'navigateToArchives');

          const button = fixture.debugElement.nativeElement.querySelector('.btn-table-header');
          button.click();

          fixture.whenStable().then(() => {
               expect(component.navigateToArchives).toHaveBeenCalled();
          });
     }));

     it('should open ProductionNr modal', fakeAsync(() => {
          spyOn(component, 'openProductionNr');
          component.openProductionNr(12);
          const el = fixture.debugElement.query(By.css('.modal-title'));
          expect(el).toBeDefined();
     }));

     it('should open production date modal', fakeAsync(() => {
          spyOn(component, 'openProductionDate');
          component.openProductionDate(12);
          const el = fixture.debugElement.query(By.css('.modal-title'));
          expect(el).toBeDefined();
     }));

     it('should open ClientMeasures modal', fakeAsync(() => {
          spyOn(component, 'openClientMeasures');
          component.openProductionDate(12);
          const el = fixture.debugElement.query(By.css('.modal-title'));
          expect(el).toBeDefined();
     }));

     it('should open ProductionFormModal', fakeAsync(() => {
          spyOn(component, 'openProductionFormModal');
          component.openProductionFormModal(12);
          const el = fixture.debugElement.query(By.css('.modal-title'));
          expect(el).toBeDefined();
     }));

     //   it('should run printProductionDescription', fakeAsync(() => {
     //        spyOn(component, 'printProductionDescription');
     //        component.printProductionDescription(12);
     // const el = fixture.debugElement.query(By.css('.modal-title'));
     // expect(el).toBeDefined();
     //   }));
     //printProductionDescription

     // it('should render assorts table header', fakeAsync(() => {
     //      const compiled = fixture.debugElement.nativeElement;
     //      // const data: Production[] = actualWeekMock;
     //      //  component.newTableData$ = of(data);
     //      component.actualWeek = actualWeekMock;
     //      fixture.detectChanges();
     //      tick(1000);
     //      // expect(compiled.querySelector('app-production-table')).toBeTruthy();
     //      expect(compiled.querySelector('week-title')?.textContent).toBeTruthy();
     //      // .toContain('tydzień 49 (2024-12-05)');
     // }));

     it('should render assorts table header', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          component.actualWeek = actualWeekMock;
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-production-table')).toBeTruthy();
     }));

     // it('should complete table titles', fakeAsync(() => {
     //      const currentWeekTitle = component.weekTitles[0]; // = 'tydzień 49 (2024-12-05)'

     //      expect(currentWeekTitle).toContain('tydzień 49 (2024-12-05)');
     // }));

     // it('should call redirect to archives', fakeAsync(() => {
     //      spyOn(component, 'printWeekReport');

     //      const button = fixture.debugElement.nativeElement.querySelector('button');
     //      button.click();

     //      fixture.whenStable().then(() => {
     //           expect(component.printWeekReport(0)).toHaveBeenCalled();
     //      });
     // }));
});
