import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const ClientDataTableColumns: TableColumns[] = [
     { name: 'Nr. klienta', prop: 'client_nr', width: '100', link: 'details' },
     { name: 'Imię i nazwisko', prop: 'firstname', width: '100' },
     { name: 'Email', prop: 'email', width: '100' },
     { name: 'Ostatnie zamówienie', prop: 'delivery_date"', width: '100' },
     { name: 'Status ost. zam.', prop: 'status', width: '100' },
     // { name: 'Dodaj zam.', prop: 'email', width: '100', link: 'add' },
     // { name: 'Status ost. zam.', prop: 'id_status', width: '100' },
     { name: 'Usuń', prop: 'id_order', width: '100', link: 'delete' },
];

// export const LiningsDataTableColumns: TableColumns[] = [
//      { name: 'Id', prop: 'id', width: '200' },
//      { name: 'Nazwa', prop: 'name', width: '100', link: 'details' },
//      //  { name: 'Typ', prop: 'type', width: '100' },
// ];
