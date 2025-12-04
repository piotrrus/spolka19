import { TableColumns } from '@shared/interfaces/table-columns.interface';

export const StockTableColumns: TableColumns[] = [
     { name: 'Artykuł', prop: 'artName', link: 'articleDetails' },
     { name: 'Dostawca', prop: 'contractor', link: 'contractorDetails' },
     { name: 'Materiał/Model', prop: 'article' },
     { name: 'Magazyn', prop: 'warehouse' },
     { name: 'Ilość', prop: 'quantity' },
     { name: 'Cena w €', prop: 'priceEuro' },
     { name: 'Cena zak.', prop: 'buyingPrice' },
     { name: 'Cena sprz.', prop: 'sellingPrice' },
     { name: 'Dodano', prop: 'addDate', link: 'moveToStock' },
     { name: 'Klient', prop: 'clientNr' },
     { name: 'Zam.', prop: 'invoiceNr' },
];
