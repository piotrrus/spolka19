import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InventoryYearReportComponent } from './inventory-year-report.component';
import { ReportsService } from '@features/reports-page/services/reports.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { InventoryReportdPrintTableHelper } from '@features/reports-page/helpers/inventory-report-print-table.helper';
import { MatCardModule } from '@angular/material/card';
describe('InventoryYearReportComponent', () => {
     let component: InventoryYearReportComponent;

     let fixture: ComponentFixture<InventoryYearReportComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [InventoryYearReportComponent],
               imports: [HttpClientTestingModule, MatCardModule, ToastrModule.forRoot(), NgxDatatableModule],
               providers: [ReportsService, InventoryReportdPrintTableHelper],
          }).compileComponents();

          fixture = TestBed.createComponent(InventoryYearReportComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     // describe('#Stock Table ', () => {
     //      it('should emit showDetails', () => {
     //           const spy = spyOn(component.showDetailsAction, 'emit');
     //           component.showDetails(warehouseData);
     //           expect(spy).toHaveBeenCalledWith(stockData);
     //      });
     // });
});
