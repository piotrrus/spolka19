import { Routes } from '@angular/router';
import { AdminGuard } from '@core/auth/admin-guard';
import { AuthGuard } from '@core/auth/auth-guard';
import { ArchivesTableComponent } from '@features/production-page/components/tables/archives-table/archives-table.component';
import { ProductionPageComponent } from './features/production-page/containers/production/production-page.component';
import { ProductionArchivePageComponent } from '@features/production-page/containers/archives/production-archive-page.component';
import { RegisterPageComponent } from './features/user/containers/register/register-page.component';

export const routes: Routes = [
     {
          path: '',
          loadComponent: () =>
               import('./features/home-page/containers/home-page.component').then(
                    (m) => m.HomePageComponent
               ),
          canActivate: [AuthGuard],
     },
     {
          path: 'home',
          loadComponent: () =>
               import('./features/home-page/containers/home-page.component').then(
                    (m) => m.HomePageComponent
               ),
          canActivate: [AuthGuard],
     },
     {
          path: 'login',
          loadComponent: () =>
               import('./features/user/containers/login/login-page.component').then(
                    (m) => m.LoginPageComponent
               ),
     },
     {
          path: 'logout',
          loadComponent: () =>
               import('./features/user/containers/login/login-page.component').then(
                    (m) => m.LoginPageComponent
               ),
          canActivate: [AuthGuard],
     },
     //    {
     //         path: 'admin',
     //         loadComponent: () =>
     //              import('./features/admin-page/admin-page.module').then((m) => m.AdminPageModule),
     //         canActivate: [AuthGuard],
     //    },
     {
          path: 'assorts',
          loadComponent: () =>
               import('./features/assorts-page/containers/assorts-page.component').then(
                    (m) => m.AssortsPageComponent
               ),
          canActivate: [AuthGuard, AdminGuard],
     },
     {
          path: 'clients',
          loadComponent: () =>
               import(
                    './features/clients-page/containers/clients-list-page/clients-page.component'
               ).then((m) => m.ClientsPageComponent),
          canActivate: [AuthGuard, AdminGuard],
     },
     {
          path: 'client/details/:id',
          loadComponent: () =>
               import(
                    './features/clients-page/containers/client-details-page/client-details-page.component'
               ).then((m) => m.ClientDetailsPageComponent),
          canActivate: [AuthGuard, AdminGuard],
     },
     //  {
     //       path: 'consumption-standards',
     //       loadComponent: () =>
     //            import('./features/consumption-standards/').then(
     //                 (m) => m.ConsumptionStandardsModule
     //            ),
     //       //  canActivate: [AuthGuard, AdminGuard],
     //  },
     {
          path: 'contractors',
          loadComponent: () =>
               import('./features/contractors-page/containers/contractors-page.component').then(
                    (m) => m.ContractorsPageComponent
               ),
          canActivate: [AuthGuard, AdminGuard],
     },
     //    {
     //         path: 'events',
     //         loadComponent: () =>
     //              import('./features/events-page/events-page.module').then((m) => m.EventsPageModule),
     //         //  canActivate: [AuthGuard, AdminGuard],
     //    },

     {
          path: 'assorts',
          loadComponent: () =>
               import('./features/assorts-page/containers/assorts-page.component').then(
                    (m) => m.AssortsPageComponent
               ),
          canActivate: [AuthGuard],
     },

     //    {
     //         path: 'fabric-use-standards',
     //         loadComponent: () =>
     //              import('./features/fabric-use-standards-page/fabric-use-standards-page.module').then(
     //                   (m) => m.FabricUseStandardsPageModule
     //              ),
     //         // canActivate: [AuthGuard, AdminGuard],
     //    },
     {
          path: 'felts',
          loadComponent: () =>
               import('./features/felts-page/containers/felts-page.component').then(
                    (m) => m.FeltsPageComponent
               ),
          canActivate: [AuthGuard, AdminGuard],
     },
     {
          path: 'linings',
          loadComponent: () =>
               import('./features/lining-page/containers/lining-page.component').then(
                    (m) => m.LiningPageComponent
               ),
          canActivate: [AuthGuard, AdminGuard],
     },
     {
          path: 'orders',
          loadComponent: () =>
               import('./features/orders-page/containers/orders-all/orders-page.component').then(
                    (m) => m.OrdersPageComponent
               ),
          canActivate: [AuthGuard, AdminGuard],
     },

     {
          path: 'myorder',
          loadChildren: () =>
               import('./features/myorder-page/routes/myorder.routes').then(
                    (m) => m.MYORDER_ROUTES
               ),
     },
     // {
     //      path: 'myorder/:id',
     //      loadComponent: () =>
     //           import(
     //                './features/myorder-page/containers/myorder-page/myorder-page.component'
     //           ).then((m) => m.MyorderPageComponent),
     //      canActivate: [AuthGuard, AdminGuard],
     // },
     //         { path: ‘products’, component: ProductsComponent, children: [
     //       { path: archives, component: TopProductsComponent },
     // 	{ path: ‘:id’, component: ProductionPageComponent }
     //    ]},
     // --------------------------------------------

     {
          path: 'production',
          loadChildren: () =>
               import('./features/production-page/routes/production.routes').then(
                    (m) => m.PRODUCTION_ROUTES
               ),
     },

     //---------------------------------------------

     // {
     //      path: 'production',
     //      component: ProductionPageComponent,
     //      children: [
     //           {
     //                path: ':id',
     //                component: ProductionPageComponent,
     //           },
     //           {
     //                path: 'archives',
     //                component: ProductionArchivePageComponent,
     //           },
     //      ],
     // },
     //productionRoutes
     // {
     //      path: 'production/:id',
     //      loadComponent: () =>
     //           import(
     //                './features/production-page/containers/production/production-page.component'
     //           ).then((m) => m.ProductionPageComponent),
     //      canActivate: [AuthGuard, AdminGuard],
     // },

     {
          path: 'register',
          loadComponent: () =>
               import('./features/user/containers/register/register-page.component').then(
                    (m) => m.RegisterPageComponent
               ),
     },
     {
          path: 'reports',
          loadChildren: () =>
               import('./features/reports-page/routes/reports.routes').then(
                    (m) => m.REPORTS_ROUTES
               ),
     },

     // {
     //      path: 'reports/:id',
     //      loadComponent: () =>
     //           import(
     //                './features/reports-page/containers/reports-page/reports-page.component'
     //           ).then((m) => m.ReportsPageComponent),
     //      canActivate: [AuthGuard, AdminGuard],
     // },
     {
          path: 'stock/:id',
          loadComponent: () =>
               import('./features/stock-page/containers/stock-page.component').then(
                    (m) => m.StockPageComponent
               ),
          canActivate: [AuthGuard, AdminGuard],
     },
     {
          path: 'warehouses',
          loadComponent: () =>
               import('./features/warehouse-page/containers/warehouse-page.component').then(
                    (m) => m.WarehousePageComponent
               ),
          canActivate: [AuthGuard, AdminGuard],
     },
     {
          path: 'not-found',
          loadComponent: () =>
               import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
     },
];
