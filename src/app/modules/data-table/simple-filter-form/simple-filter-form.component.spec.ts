import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleFilterFormComponent } from './simple-filter-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SimpleFilterFormComponent', () => {
     let component: SimpleFilterFormComponent;
     let fixture: ComponentFixture<SimpleFilterFormComponent>;

     beforeEach(async(() => {
          TestBed.configureTestingModule({
               imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
               ],
               declarations: [SimpleFilterFormComponent],
          }).compileComponents();
     }));

     beforeEach(() => {
          fixture = TestBed.createComponent(SimpleFilterFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     describe('#Simple Filter Form ', () => {
          it('should remove text ', () => {
               component.removeText();
               expect(component.form.searchedText?.value).toEqual('');
          });
     });
});
