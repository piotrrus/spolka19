import { StockFabricSaveModel, StockFabric } from '../models/stock-fabric.interface';

export function mapFabric(fabric: StockFabric): StockFabricSaveModel {
     const fabricModel = <StockFabricSaveModel>{};
     fabricModel.id_assort = 70;
     fabricModel.id_contractor = fabric.contractorId;
     fabricModel.id_warehouse = fabric.warehouseId ? fabric.warehouseId : 0;
     fabricModel.material_nr = fabric.materialNr;
     fabricModel.quantity = fabric.quantity;
     fabricModel.price_euro = fabric.quantity;
     fabricModel.buying_price = fabric.buyingPrice;
     fabricModel.pattern = fabric.pattern ? fabric.pattern : null;
     return fabricModel;
}
