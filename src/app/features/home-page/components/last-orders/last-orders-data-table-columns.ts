import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const LastOrdersDataTableColumns: TableColumns[] = [
     { name: 'Nr klienta', prop: 'client_nr', link: 'details' },
     { name: 'Nr zamówienia', prop: 'invoice_nr', link: 'details' },
     { name: 'Data zamówienia', prop: 'orderDate' },
     { name: 'Status', prop: 'status' },
];
