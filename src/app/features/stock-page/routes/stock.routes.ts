import { Routes } from '@angular/router';
import { StockPageComponent } from '../containers/stock-page.component';

export const STOCK_ROUTES: Routes = [
     {
          path: '',
          component: StockPageComponent,
     },
     {
          path: ':option',
          component: StockPageComponent,
     },
     {
          path: 'status/:id',
          component: StockPageComponent,
     },
];
