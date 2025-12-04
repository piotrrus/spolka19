import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const InventoryYearReportColumns: TableColumns[] = [
     { name: 'Asortyment', prop: 'assort', width: '100' },
     { name: 'Magazyn', prop: 'warehouse', width: '100' },
     { name: 'Dostawca', prop: 'contractor', width: '100' },
     { name: 'Artykuł', prop: 'details', width: '100' },
     { name: 'Ilość', prop: 'quantity', width: '100' },
     { name: 'Cena zak.€', prop: 'price_euro', width: '100' },
     { name: 'Cena zak.zł', prop: 'buying_price', width: '100' },
     { name: 'Wartość', prop: 'price', width: '100' },
];
