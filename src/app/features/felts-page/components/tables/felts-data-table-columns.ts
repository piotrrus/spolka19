import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const FeltsDataTableColumns: TableColumns[] = [
     { name: 'Id', prop: 'id' },
     { name: 'Nazwa', prop: 'name', link: 'details' },
];
