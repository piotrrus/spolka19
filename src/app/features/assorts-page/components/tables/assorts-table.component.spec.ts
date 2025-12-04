import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AssortsTableComponent } from './assorts-table.component';
import { assortMock } from '@features/assorts-page/stubs/assort.stub';

describe('AssortsTableComponent', () => {
     let component: AssortsTableComponent;

     let fixture: ComponentFixture<AssortsTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [AssortsTableComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(AssortsTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Contractors Table ', () => {
          it('should emit showDetails', () => {
               const spy = spyOn(component.showDetailsAction, 'emit');
               component.showDetails(assortMock);
               expect(spy).toHaveBeenCalledWith(assortMock);
          });
     });
});
