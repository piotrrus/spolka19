import { Shoes, ShoesModel } from '../models/shoes.interface';

export function mapShoes(shoes: Shoes): ShoesModel {
     const shoesModel: ShoesModel = <ShoesModel>{};
     shoesModel.id_assort = 60;
     shoesModel.id_contractor = shoes.contractorId;
     shoesModel.name = shoes.name;
     shoesModel.quantity = shoes.quantity;
     shoesModel.selling_price = shoes.sellingPrice;
     shoesModel.buying_price = shoes.buyingPrice;
     shoesModel.rozmiar = shoes.size;
     return shoesModel;
}
