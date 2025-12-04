import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClientMainDataComponent } from './client-main-data.component';

describe('ClientMainDataComponent', () => {
     let component: ClientMainDataComponent;
     let fixture: ComponentFixture<ClientMainDataComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [NoopAnimationsModule],
               declarations: [ClientMainDataComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(ClientMainDataComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
