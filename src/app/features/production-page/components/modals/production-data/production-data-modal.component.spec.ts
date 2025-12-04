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
import { ProductionDataModalComponent } from './production-data-modal.component';
import { ProductionEditFormComponent } from '../../forms/production-edit-form/production-edit-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { By } from '@angular/platform-browser';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ProductionDataModalComponent', () => {
     let component: ProductionDataModalComponent;
     let fixture: ComponentFixture<ProductionDataModalComponent>;

     // let formComponent: ProductionEditFormComponent;
     // let fixtureForm: ComponentFixture<ProductionEditFormComponent>;

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
                    MatRadioModule,
               ],
               declarations: [ProductionDataModalComponent, ProductionEditFormComponent],
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

          fixture = TestBed.createComponent(ProductionDataModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();

          // fixtureForm = TestBed.createComponent(ProductionEditFormComponent);
          // formComponent = fixtureForm.componentInstance;
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Production Date Modal ', () => {
          it('should  render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          // it('should render app-production-data-form', () => {
          //      const editForm = fixture.debugElement.query(By.css('app-production-nr-form'));
          //      expect(editForm).toBeTruthy();
          // });

          it('should render modal-header', () => {
               // const modal = document.querySelector('.modal-header');
               const modal = fixture.debugElement.query(By.css('.modal-header'));
               expect(modal).toBeTruthy();
          });

          it('should render modal-button-section', () => {
               const modal = fixture.debugElement.query(By.css('.modal-button-section'));
               //      const modal = document.querySelector('.modal-button-section');
               expect(modal).toBeTruthy();
          });

          // it('should should have close modal', () => {
          //      spyOn(component, 'onClose');
          //      let button = fixture.debugElement.nativeElement.querySelector('#close-btn');
          //      button.click();
          //      fixture.whenStable().then(() => {
          //           expect(component.onClose).toHaveBeenCalled();
          //      });
          // });

          //onClose

          // it('should have modal title', () => {
          //      const title = document.querySelector('.modal-title');
          //      expect(title?.textContent).toBe(TITLES.PRODUCTION_NR_MODAL_TITLE);
          // });

          // it('should open help menu when clicking help button', async () => {
          //      const helpButton = await loader.getHarness<ProductionNrModalComponent>(
          //        MatButtonHarness.with({
          //          selector: '[id="helpBtn"]',
          //        })
          //      );
          //      expect(helpButton).toBeTruthy();
          //      const helpMenu = await loader.getHarness<MatMenuHarness>(MatMenuHarness)
          //      expect(await helpMenu.isOpen()).toBeFalsy();
          //      await helpButton.click();
          //      expect(await helpMenu.isOpen()).toBeTruthy();
          //    });
          // it('should work', async () => {
          //      // Harness for mat-button whose id is 'more-info'.
          //      const info = await loader.getHarness(MatButtonHarness.with({selector: '#more-info'}));
          //      // Harness for mat-button whose text is 'Cancel'.
          //      const cancel = await loader.getHarness(MatButtonHarness.with({text: 'Cancel'}));
          //      // Harness for mat-button with class 'confirm' and whose text is either 'Ok' or 'Okay'.
          //      const okButton = await loader.getHarness(
          //          MatButtonHarness.with({selector: '.confirm', text: /^(Ok|Okay)$/}));
          //    });
          // const title = document.querySelector('.modal-title');
          // component.isFormValid
          // it('should main form has no errors', () => {
          //      const form = component.form;
          //      form.lastname?.setValue('aaa');
          //      form.client_nr?.setValue('aaa');
          //      form.firstname?.setValue('zzz');
          //      form.email?.setValue('zzz@wp.pl');
          //      expect(form.form.errors).toBeNull();
          // });
          // it('should form field lastname has length error', () => {
          //      const lastname = component.form.lastname;
          //      lastname?.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
          //      expect(lastname?.hasError('maxlength')).toBeTruthy();
          // });
          // it('should form field lastname has no errors', () => {
          //      const lastname = component.form.lastname;
          //      lastname?.setValue('aaaaaaa');
          //      expect(lastname?.errors).toBeNull();
          // });
          // it('should form field firstname has no errors', () => {
          //      const firstname = component.form.firstname;
          //      firstname?.setValue('aaaaaaa');
          //      expect(firstname?.errors).toBeNull();
          // });
          // it('should form field email has email error', () => {
          //      const email = component.form.email;
          //      email?.setValue('aaa@wp.pl');
          //      expect(email?.errors).toBeNull();
          // });
          // it('should form field email has no errors', () => {
          //      const email = component.form.email;
          //      email?.setValue('aaa');
          //      expect(email?.errors).toBeTruthy();
          // });
     });
});
