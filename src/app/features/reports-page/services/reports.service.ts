import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { REPORTS_API_PATHS } from '../enums/reports.paths.enum';
import {
     InventoryReportData,
     ProductionReportData,
     ReportData,
     ReportDataApi,
     ReportInventoryDataApi,
     ReportName,
     ReportProductionDataApi,
     ReportsListApi,
     ReportsNamesApi,
} from '../models/reports.interface';
import { List } from '@shared/interfaces/list.interface';

@Injectable()
export class ReportsService extends ApiService {
     public getReport(id: number): Observable<ReportData[]> {
          return this.get<ReportDataApi>(`${REPORTS_API_PATHS.DETAILS}${id}`).pipe(
               map((report) => report.data)
          );
     }

     public getProductionReport(id: number): Observable<ProductionReportData[]> {
          return this.get<ReportProductionDataApi>(`${REPORTS_API_PATHS.DETAILS}${id}`).pipe(
               map((report) => report.data)
          );
     }

     public getInventoryReport(id: number): Observable<InventoryReportData[]> {
          return this.get<ReportInventoryDataApi>(`${REPORTS_API_PATHS.DETAILS}${id}`).pipe(
               map((report) => report.data)
          );
     }

     public getReportName(id: number): Observable<ReportName[]> {
          return this.get<ReportsNamesApi>(`${REPORTS_API_PATHS.NAME}${id}`).pipe(
               map((reports) => reports.data)
          );
     }

     public getReportsList(): Observable<List[]> {
          return this.get<ReportsListApi>(REPORTS_API_PATHS.LIST).pipe(map((reports) => reports.data));
     }
}
