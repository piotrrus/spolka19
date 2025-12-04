import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { OrderAssortModalComponent } from './order-assort-modal.component';
import { OrderAssortFormComponent } from '../../forms/order-assort/order-assort-form.component';

describe('OrderAssortModalComponent', () => {
     let component: OrderAssortModalComponent;
     let fixture: ComponentFixture<OrderAssortModalComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [OrderAssortModalComponent, OrderAssortFormComponent],
               imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatDialogModule,
               ],
               providers: [
                    {
                         provide: MatDialogRef,
                         useValue: {},
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          });
          fixture = TestBed.createComponent(OrderAssortModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     describe('#Fabric Modal ', () => {
          it('should  render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          it('should render app-production-data-form', () => {
               const editForm = fixture.debugElement.query(By.css('app-order-assort-form'));
               expect(editForm).toBeTruthy();
          });

          it('should render modal-header', () => {
               const editForm = document.querySelector('.modal-header');
               expect(editForm).toBeTruthy();
          });

          it('should render modal-button-section', () => {
               const editForm = document.querySelector('.modal-button-section');
               expect(editForm).toBeTruthy();
          });
     });
});
