import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const ClientOrdersTableColumns: TableColumns[] = [
     { name: 'Nr.zam.', prop: 'invoiceNr', width: 250 },
     { name: 'Data zam.', prop: 'orderDate', width: 250 },
     { name: 'Data wyk.', prop: 'deliveryDate', width: 250 },
     { name: 'Status', prop: 'Status', width: 250 },
];
