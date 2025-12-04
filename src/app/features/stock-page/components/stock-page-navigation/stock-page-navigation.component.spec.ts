import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPageNavigationComponent } from './stock-page-navigation.component';

describe('StockPageNavigationComponent', () => {
     let component: StockPageNavigationComponent;
     let fixture: ComponentFixture<StockPageNavigationComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [StockPageNavigationComponent],
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
               ],
          });
          fixture = TestBed.createComponent(StockPageNavigationComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should emit warehouseFormChange', () => {
          const spy = spyOn(component.assortFormChange, 'emit');
          component.onAssortChange(1);
          expect(spy).toHaveBeenCalledWith(1);
     });
     it('should emit warehouseFormChange', () => {
          const spy = spyOn(component.warehouseFormChange, 'emit');
          component.onWarehouseChange(1);
          expect(spy).toHaveBeenCalledWith(1);
     });
     it('should emit warehouseFormChange', () => {
          const spy = spyOn(component.optionFormChange, 'emit');
          component.onOptionChange(1);
          expect(spy).toHaveBeenCalledWith(1);
     });
});
