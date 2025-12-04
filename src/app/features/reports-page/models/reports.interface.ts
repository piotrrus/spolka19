import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { List } from '@shared/interfaces/list.interface';

export interface ReportsListApi extends RestResponse {
     data: List[];
}

export interface IReportsApi extends RestResponse {
     data: IReports[];
}

export interface IReports {
     id: number;
     name: string;
     address: string;
     factory: string;
     phone: string;
}

export interface ReportsNamesApi extends RestResponse {
     data: ReportName[];
}

export interface ReportName {
     name: string;
}

export interface ReportDataApi {
     data: ReportData[];
}

export interface ReportProductionDataApi {
     data: ProductionReportData[];
}

export interface ReportInventoryDataApi {
     data: InventoryReportData[];
}

export interface ReportData {
     amount: string;
     art_name: string;
     month: string;
     price: number;
}

export interface InventoryReportData {
     assort: string;
     details: string;
     contractor: string;
     warehouse: string;
     price: number;
     price_euro: string;
     buying_price: string;
     quantity: string;
     moved_to_stock: string;
}

export interface ProductionReportData {
     id: number;
     prod_order: string;
     invoice_nr: string;
     material_nr: string;
     art_name: string;
     lining: string;
     contractor: string;
     client_nr: string;
     tonacja: string;
     data_przek_do_prod_week: string;
}
