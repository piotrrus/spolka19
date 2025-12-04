import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ProductionArchivePageComponent } from './production-archive-page.component';
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
import { DescriptionPrintHelper } from '@features/production-page/helpers/description-print.helper';
import { ClientMeasuresService } from '@features/clients-page/services/client-measures-service';
import { ProductionStore } from '@features/production-page/production-store/production-store';
import { ClientsMeasuresStore } from '@features/clients-page/client-store/client-measures-crud-facade';
import { Router } from '@angular/router';
import { PRODUCTION_API_PATHS } from '@features/production-page/enums/production.paths.enum';

describe('ProductionArchivePageComponent', () => {
     let component: ProductionArchivePageComponent;
     let fixture: ComponentFixture<ProductionArchivePageComponent>;
     let router: Router;
     let clientsMeasuresStore: ClientsMeasuresStore;
     let productionStore: ProductionStore;

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
               ],
               declarations: [ProductionArchivePageComponent, ProductionEditFormComponent],

               providers: [
                    ProductionService,
                    ClientMeasuresService,
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

          fixture = TestBed.createComponent(ProductionArchivePageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
          router = TestBed.inject(Router);
          clientsMeasuresStore = TestBed.inject(ClientsMeasuresStore);
          productionStore = TestBed.inject(ProductionStore);
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render title in a page-title tag', () => {
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('.page-title').textContent).toContain(
               'Produkcja - archiwum'
          );
     });

     it('should call redirect to add order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.navigateToProduction();
          expect(navigateSpy).toHaveBeenCalledWith([PRODUCTION_API_PATHS.PRODUCTION]);
     }));

     it('should call redirect to add order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.navigateToProductionForm(100);
          expect(navigateSpy).toHaveBeenCalledWith([
               `${PRODUCTION_API_PATHS.PRODUCTION_FORM}${100}`,
          ]);
     }));

     it('should open ClientMeasures modal', fakeAsync(() => {
          const spy = spyOn(clientsMeasuresStore, 'openClientMeasures');
          component.showClientMeasures(12);
          expect(spy).toHaveBeenCalledWith(12);
     }));

     it('should open ProductionDate modal', fakeAsync(() => {
          const spy = spyOn(productionStore, 'openProductionDate');
          component.editProductionDate(12);
          expect(spy).toHaveBeenCalledWith(12);
     }));
     it('should open editProductionNr modal', fakeAsync(() => {
          const spy = spyOn(productionStore, 'openProductionNr');
          component.editProductionNr(12);
          expect(spy).toHaveBeenCalledWith(12);
     }));
     it('should open editProductionData modal', fakeAsync(() => {
          const spy = spyOn(productionStore, 'openProductionForm');
          component.editProductionData(12);
          expect(spy).toHaveBeenCalledWith(12);
     }));

     // it('should open editProductionData modal', fakeAsync(() => {}));

     // it('should open showClientMeasures', fakeAsync(() => {
     //      spyOn(component, 'openProductionFormModal');
     //      component.openProductionFormModal(12);
     //      const el = fixture.debugElement.query(By.css('.modal-title'));
     //      expect(el).toBeDefined();
     // }));

     // it('should render title in a h2 tag', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('h2').textContent).toContain('Archiwum');
     // });

     // it('should call redirection to production', fakeAsync(() => {
     //      spyOn(component, 'navigateToProduction');

     //      const button = fixture.debugElement.nativeElement.querySelector('.btn-table-header');
     //      button.click();

     //      fixture.whenStable().then(() => {
     //           expect(component.navigateToProduction).toHaveBeenCalled();
     //      });
     // }));

     // it('should have button header', fakeAsync(() => {
     //      const button = fixture.debugElement.query(By.css('.btn-table-header'));
     //      expect(button.attributes['title']).toEqual('pokaż dane archiwalne');
     // }));

     //  it('should render app-archives-table', fakeAsync(() => {
     // fixture.detectChanges();
     // fixture.whenStable().then(() => {
     //      //  const table = fixture.debugElement.query(By.css('app-archives-table'));
     //      //   expect(component.showProduction).toHaveBeenCalled();
     //      const compiled = fixture.debugElement.nativeElement;
     //      const table = compiled.querySelector('app-archives-table'); //null

     // });
     //      //  const table = fixture.debugElement.query(By.css('app-archives-table'));

     //      const compiled = fixture.debugElement.nativeElement;
     //      const table = compiled.querySelector('app-archives-table'); //null
     //      //    expect(compiled.querySelector('app-archives-table');

     //      //  expect(button.attributes['title']).toEqual('pokaż dane archiwalne');
     // }));
});
