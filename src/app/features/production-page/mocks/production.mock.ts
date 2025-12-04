import { ProductionDescription } from '../models/production-description-api.interface';
import { AfterProduction, Production } from '../models/production.interface';

export const actualWeekMock: Production[] = [
     {
          id: 11,
          id_order: 5,
          art_name: 'Aaa',
          id_assort: 8,
          prod_order: '293/12',
          id_client: 60,
          model_name: '',
          material_nr: '665062',
          probe: false,
          client_nr: '00-309 bbb',
          dostawca: 'Loro Piana',
          tonacja: 'gładka',
          podszewka: '8586 półpodszewka',
          probex: '',
          isfemine: false,
          produkcja: 7,
          week_prod_date: '49-2024',
          data_przek_do_prod: '2024-12-04',
     },
];

export const productionByWeeksNock = {
     actualWeek: actualWeekMock,
     fourWeeksBefore: actualWeekMock,
     threeWeeksBefore: actualWeekMock,
     twoWeeksBefore: actualWeekMock,
     weekBefore: actualWeekMock,
};

export const afterProductionMock: AfterProduction = {
     id: 11,
     id_order: 5,
     art_name: 'Aaa',
     id_assort: 8,
     prod_order: '293/12',
     hasSize: true,
};

export const productionDescriptionMock: ProductionDescription = {
     id: 11,
     typ: 'test',
     description: 'test',
};
