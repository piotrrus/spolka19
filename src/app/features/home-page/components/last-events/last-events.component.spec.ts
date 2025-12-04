import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LastEventsComponent } from './last-events.component';
import { Event } from '@features/events-page/models/events.interface';

describe('LastEventsComponent', () => {
     let component: LastEventsComponent;
     let fixture: ComponentFixture<LastEventsComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [RouterTestingModule, NoopAnimationsModule, NgxDatatableModule],
               declarations: [LastEventsComponent, TableHeaderComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(LastEventsComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render title in a page-title class', () => {
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('.page-title').textContent).toContain('Najbliższe wydarzenia');
     });

     it('should render last order table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Event[] = [
               {
                    id: 1,
                    clientId: 12,
                    clientNr: '00-309xxx',
                    invoiceNr: 'abc 109',
                    date: '2017-05-23 15:03:00',
                    orderId: 12,
                    status: 'nowe',
                    title: 'test',
                    groupId: 1,
               },
          ];

          component.lastEvents = data;
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('ngx-datatable')).toBeTruthy();
     }));
});
