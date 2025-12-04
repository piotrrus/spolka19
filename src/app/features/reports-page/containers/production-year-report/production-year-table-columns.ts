import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const ProductionYearReportDataTableColumns: TableColumns[] = [
     // { name: 'Lp.', prop: 'month', width: '100' },
     { name: 'Nr kl.', prop: 'client_nr', width: '100' },
     { name: 'Nr prod.', prop: 'prod_order', width: '100' },
     { name: 'Asort.', prop: 'art_name', width: '100' },
     { name: 'Dostawca', prop: 'contractor', width: '100' },
     { name: 'Nr.tkan.', prop: 'material_nr', width: '100' },
     { name: 'Tonacja', prop: 'tonacja', width: '100' },
     { name: 'Podsz.', prop: 'lining', width: '100' },
     { name: 'Tydz.', prop: 'data_przek_do_prod_week', width: '100' },
];
// { name: 'Asortyment', prop: 'type', width: '100' },
// { name: 'Magazyn', prop: 'stock', width: '100' },
// { name: 'Dostawca', prop: 'contractor', width: '100' },
// { name: 'Artykuł', prop: 'details', width: '100' },
// { name: 'Ilość', prop: 'quantity', width: '100' },
// { name: 'Cena zak.€', prop: 'price_euro', width: '100' },
// { name: 'Cena zak.zł', prop: 'buying_price', width: '100' },
// { name: 'Wartość', prop: 'price', width: '100' },
// Lp.	Nr kl.	Nr prod.	Asort.	Dostawca	Nr.tkan.	Tonacja	Podsz.	Tydz.
