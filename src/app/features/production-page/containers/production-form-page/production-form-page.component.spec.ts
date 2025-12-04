import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductionFormPageComponent } from './production-form-page.component';
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
import { By } from '@angular/platform-browser';

describe('ProductionFormPageComponent', () => {
     let component: ProductionFormPageComponent;
     let fixture: ComponentFixture<ProductionFormPageComponent>;

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
               declarations: [ProductionFormPageComponent, ProductionEditFormComponent],
               providers: [
                    ProductionService,
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

          fixture = TestBed.createComponent(ProductionFormPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render title in a h2 tag', () => {
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('h2').textContent).toContain('Produkcja');
     });

     // it('should call redirect to archives', fakeAsync(() => {
     //      spyOn(component, 'onSave');
     //      // spyOn(component, 'isFormValid');
     //      component.isFormValid = true;
     //      //  const button = fixture.debugElement.query(By.css('save-btn'));
     //      //    const button = fixture.debugElement.nativeElement.querySelector('#save-btn');
     //      const button = fixture.debugElement.nativeElement.querySelector('button');
     // fixture.debugElement.query(By.('mat-raised-button')).nativeElement;
     //   const button = fixture.debugElement.query(By.css('mat-raised-button')).nativeElement;
     //   expect(button.attributes['disabled'].value).toEqual('true');
     // expect(button.attributes.getNamedItem('ng-reflect-is-disabled')?.value).toBeTruthy();
     //   button.click();

     //   fixture.whenStable().then(() => {
     //        expect(component.onSave).toHaveBeenCalled();
     //   });

     //expect(button.attributes.getNamedItem('ng-reflect-is-disabled')?.value).toBeTruthy();
     //  }));

     it('renders app-production-edit-form', () => {
          const editForm = fixture.debugElement.query(By.css('app-production-edit-form'));
          expect(editForm).toBeTruthy();
     });
});
