import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const UsersDataTableColumns: TableColumns[] = [
     { name: 'Id', prop: 'id' },
     { name: 'Nazwa', prop: 'name', link: 'details' },
     { name: 'Email', prop: 'email' },
     { name: 'Rola', prop: 'role' },
     { name: 'Aktywny', prop: 'is_active' },
     { name: 'Usuń', prop: '', delete: 'delete' },
];
