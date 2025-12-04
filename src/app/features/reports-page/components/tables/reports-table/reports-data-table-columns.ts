import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const ReportsDataTableColumns: TableColumns[] = [
     { name: 'Miesiąc', prop: 'month', width: '100' },
     { name: 'Asortyment', prop: 'art_name', width: '100' },
     { name: 'Ilość', prop: 'amount', width: '100' },
     { name: 'Wartość', prop: 'price', width: '100' },
];
