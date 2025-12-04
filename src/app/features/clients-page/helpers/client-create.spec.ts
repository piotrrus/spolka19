import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { clientSaveData } from '../stubs/clients-data.stub';
import { clientModelCreate } from './client-create';

describe('ClientCreateMapper', () => {
     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [CommonModule, NoopAnimationsModule],
          });
     });

     describe('#ClientCreateMapper', () => {
          describe('#clientModelCreate ', () => {
               it('should have proper client data', () => {
                    const client = clientSaveData;
                    expect(clientModelCreate(client).client_nr).toEqual('client 1');
               });
          });
     });
});
