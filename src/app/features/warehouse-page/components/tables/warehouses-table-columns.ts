import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const WarehousesTableColumns: TableColumns[] = [
     { name: 'Nazwa', prop: 'name', width: '50%', link: 'details' },
     { name: 'Adres', prop: 'address', width: '50%' },
];
