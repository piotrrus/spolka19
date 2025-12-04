import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const OrdersAllDataTableColumns: TableColumns[] = [
     { name: 'Nr. zam.', prop: 'invoiceNr', width: '100' },
     { name: 'Nr. klienta', prop: 'clientNr', width: '100' },
     { name: 'Lista', prop: 'list', width: '400' },
     { name: 'Data zamówienia', prop: 'orderDate', width: '100' },
     { name: 'Termin', prop: 'deliveryDate"', width: '100' },
     { name: 'Status', prop: 'status', width: '100' },
];
