import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface StockFabricApi extends RestResponse {
  data: StockFabric;
}

export interface StockFabric {
  materialNr: string;
  assortId: number;
  contractorId: number;
  pattern: number;
  warehouseId: number;
  quantity: number;
  buyingPrice: number;
  priceEuro: number;
  moved_to_stock?: string;
}

export class StockFabricModel {
  public material_nr?: string;
  public id_assort = 70;
  public id_contractor?: number;
  public pattern?: number;
  public id_warehouse?: number;
  public quantity?: number;
  public buying_price?: number;
  public price_euro?: number;
  public moved_to_stock?: string;
}

export class StockFabricSaveModel {
  public material_nr?: string;
  public id_assort = 70;
  public id_contractor?: number;
  public pattern?: number | null;
  public id_warehouse?: number;
  public quantity?: number;
  public buying_price?: number;
  public price_euro?: number;
  public moved_to_stock?: string;
}
