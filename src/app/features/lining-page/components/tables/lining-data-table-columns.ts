import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const LiningsDataTableColumns: TableColumns[] = [
     { name: 'Id', prop: 'id', width: '200' },
     { name: 'Nazwa', prop: 'name', width: '100', link: 'details' },
     //  { name: 'Typ', prop: 'type', width: '100' },
];
