import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { Shoes } from '../models/shoes.interface';
import { ShoesModalComponent } from '../components/modals/shoes/shoes-modal.component';
import { Assort } from '../models/assort.interface';
import { OrderAssortModalComponent } from '../components/modals/assort/order-assort-modal.component';
import { StockFabricModalComponent } from '../components/modals/fabric/stock-fabric-modal.component';
import { StockFabric } from '../models/stock-fabric.interface';
import { STOCK_MODAL_TITLES } from '../enums/stock-modals-titles.enum';
import { OrderFabricModalComponent } from '../components/modals/order-fabric/order-fabric-modal.component';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { AssortList } from '@features/assorts-page/models/assorts.interface';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { List } from '@shared/interfaces/list.interface';
import { Stock } from '../models/stock.interface';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class StockModalsHelper extends BaseModalHelper {
     // private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();

     // constructor(private dialog: MatDialog) {}

     // public confirmCancel(): Observable<boolean> {
     //      return this.confirmDialogsHelper.confirmDialog();
     // }

     public openShoesModal(contractorsList: Contractor[], stock?: Stock): Observable<Shoes> {
          const dialogRef = this.dialog.open(ShoesModalComponent, {
               width: DialogSize.MEDIUM,
               disableClose: true,
               data: {
                    title: stock ? STOCK_MODAL_TITLES.SHOES_EDIT : STOCK_MODAL_TITLES.SHOES,
                    shoes: stock ? stock : null,
                    contractors: contractorsList,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: Shoes) => {
                    return data;
               })
          );
     }

     public openAssortModal(
          contractors: Contractor[],
          assortsList: AssortList[],
          stock?: Stock
     ): Observable<Assort> {
          const dialogRef = this.dialog.open(OrderAssortModalComponent, {
               width: DialogSize.MEDIUM,
               disableClose: true,
               data: {
                    title: stock ? STOCK_MODAL_TITLES.ASSORTS_EDIT : STOCK_MODAL_TITLES.ASSORTS,
                    data: stock ? stock : null,
                    contractors: contractors,
                    assorts: assortsList,
               },
          });

          return dialogRef.afterClosed().pipe(
               tap((data: Assort) => {
                    return data;
               })
          );
     }

     public openFabricModal(
          contractorsList: Contractor[],
          warehousesList: Warehouse[],
          patternsList: List[],
          stock?: Stock
     ): Observable<StockFabric> {
          const dialogRef = this.dialog.open(StockFabricModalComponent, {
               width: DialogSize.MEDIUM,
               disableClose: true,
               data: {
                    title: stock ? STOCK_MODAL_TITLES.FABRICS_EDIT : STOCK_MODAL_TITLES.FABRICS,
                    stock: stock ? stock : null,
                    contractorsList: contractorsList,
                    warehousesList: warehousesList,
                    patternsList: patternsList,
               },
          });

          return dialogRef.afterClosed().pipe(
               tap((data: StockFabric) => {
                    return data;
               })
          );
     }

     public openOrderFabricModal(
          plnToEuroActualValue: string,
          contractorsList: Contractor[],
          patternsList: List[]
     ): Observable<StockFabric> {
          const dialogRef = this.dialog.open(OrderFabricModalComponent, {
               width: DialogSize.MEDIUM,
               disableClose: true,
               data: {
                    title: STOCK_MODAL_TITLES.ORDER_FABRIC,
                    contractors: contractorsList,
                    patterns: patternsList,
                    plnToEuroActualValue: plnToEuroActualValue,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: StockFabric) => {
                    return data;
               })
          );
     }
}
