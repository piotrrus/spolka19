import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NoticeFormComponent } from './notice-form.component';
import { OrderedAssorts } from '@features/myorder-page/models/myorder.interface';

describe('NoticeFormComponent', () => {
     let component: NoticeFormComponent;
     let fixture: ComponentFixture<NoticeFormComponent>;

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
               ],
               declarations: [NoticeFormComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(NoticeFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     it('should get required form field error message', () => {
          const msg = component.getErrorMessage('required');
          expect(msg).toEqual('To pole jest wymagane.');
     });

     it('should have notices form field value set', () => {
          const orderedAssorts: OrderedAssorts = {
               id: 1,
               notices: 'test',
               assortId: 1,
               orderId: 1,

               spodnie_model: 2,
               spodnie_rozmiar: 2,
               kamizelka_model: 2,
               kamizelka_kieszenie: 2,
               kamizelka_rozmiar: 2,
               spodnie_kieszen_boczna: 2,
               marynarka_rozmiar: 2,
               marynarka_model: 2,
               marynarka_wylogi: 2,
               marynarka_kieszen: 1,
               marynarka_ilosc_guzikow: 1,
               marynarka_ilosc_rozporkow: 1,
               marynarka_amf: true,
          };
          component.orderedAssorts = orderedAssorts;
          expect(component.form.notices?.value).toEqual('test');
     });

     it('should have not set notices form value', () => {
          component.orderedAssorts = null;
          expect(component.form.notices?.value).toEqual('');
     });
});
