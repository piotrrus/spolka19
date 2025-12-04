import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StockFabricModalComponent } from './stock-fabric-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FabricFormComponent } from '../../forms/fabric/fabric-form.component';
import { MatIconModule } from '@angular/material/icon';

describe('FabricModalComponent', () => {
     let component: StockFabricModalComponent;
     let fixture: ComponentFixture<StockFabricModalComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [StockFabricModalComponent, FabricFormComponent],
               imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatDialogModule,
                    MatIconModule,
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
          fixture = TestBed.createComponent(StockFabricModalComponent);
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

          // it('should render app-production-data-form', () => {
          //      const editForm = fixture.debugElement.query(By.css('app-production-nr-form'));
          //      expect(editForm).toBeTruthy();
          // });

          it('should render modal-header', () => {
               const editForm = document.querySelector('.modal-header');
               // const editForm = fixture.debugElement.query(By.css('.modal-header'));
               expect(editForm).toBeTruthy();
          });

          it('should render modal-button-section', () => {
               const editForm = document.querySelector('.modal-button-section');
               expect(editForm).toBeTruthy();
          });
     });
});
