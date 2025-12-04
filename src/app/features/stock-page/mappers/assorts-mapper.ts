// import { Injectable } from '@angular/core';
import { AssortModel, Assort } from '../models/assort.interface';

export function mapAssorts(assort: Assort): AssortModel {
     const assortsModel: AssortModel = <AssortModel>{};
     assortsModel.id_assort = assort.assortId;
     assortsModel.id_contractor = assort.contractorId;
     assortsModel.name = assort.model;
     assortsModel.quantity = assort.quantity;
     assortsModel.selling_price = assort.sellingPrice;
     assortsModel.buying_price = assort.buyingPrice;
     return assortsModel;
}
