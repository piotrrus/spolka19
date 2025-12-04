import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { ClientMeasuresModalComponent } from './client-measures-modal.component';
import { ClientMeasuresFormComponent } from '../../forms/client-measures-form/client-measures-form.component';
import { clientMeasuresData } from '@features/clients-page/stubs/client-measures.stub';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ClientMeasuresModalComponent', () => {
     let component: ClientMeasuresModalComponent;
     let fixture: ComponentFixture<ClientMeasuresModalComponent>;
     // const dialogMock = {
     //      close: (): void => {null},
     // };
     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [
                    HttpClientTestingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatIconTestingModule,
                    MatDialogModule,
               ],
               declarations: [ClientMeasuresModalComponent, ClientMeasuresFormComponent],
               providers: [
                    {
                         provide: MatDialogRef,
                         useValue: dialogMock,
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ClientMeasuresModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#ClientMeasuresModalComponent ', () => {
          it('should render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          // it('should render app-production-nr-form', () => {
          //      const editForm = fixture.debugElement.query(By.css('app-production-nr-form'));
          //      expect(editForm).toBeTruthy();
          // });

          it('should render modal-header', () => {
               const editForm = document.querySelector('.modal-header');
               expect(editForm).toBeTruthy();
          });

          it('should render modal-button-section', () => {
               const editForm = document.querySelector('.modal-button-section');
               expect(editForm).toBeTruthy();
          });
     });
     describe('#Client Measures Modal Form', () => {
          // it('should change form data', () => {
          //      const client = clientMeasuresData;
          //      // const spy = spyOn(component, 'isFormValid');
          //      component.formData = client;
          //      fixture.detectChanges();
          //      expect(component.isFormValid).toHaveBeenCalledWith(true);
          //      // expect(spy).toHaveBeenCalledWith(true);
          // });
          it('should not change form data', () => {
               const client: unknown = '';
               component.onFormChange(client);
               expect(component.formData).toBeFalsy();
          });

          it('should change form data', () => {
               const client = clientMeasuresData;
               component.onFormChange(client);
               expect(component.formData).toBeTruthy();
          });

          it('should change form validation', () => {
               const client = clientMeasuresData;
               component.onFormChange(client);
               component.onFormValid(true);
               expect(component.isFormValid).toBeTruthy();
          });

          it('should change form validation', () => {
               component.onFormValid(false);
               expect(component.isFormValid).toBeFalsy();
          });

          // it('should be call ErrorMsgService getList service ', () => {
          //      const msg = formComponent.getErrorMessage('abc');
          //      expect(msg).toBeFalsy();
          // });
     });
});
