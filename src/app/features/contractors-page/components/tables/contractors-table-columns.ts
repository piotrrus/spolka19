import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const ContractorsTableColumns: TableColumns[] = [
     { name: 'Dostawca', prop: 'name', link: 'details' },
     { name: 'Email', prop: 'email' },
     { name: 'Kontakt', prop: 'phone' },
];
