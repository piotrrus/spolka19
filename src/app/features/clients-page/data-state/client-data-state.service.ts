import { Observable, Subject } from 'rxjs';
import { Client } from '../models/client.interface';
import { State } from '@core/state/state';

export class ClientState extends State<Client> {
     private client: Subject<Client> = new Subject<Client>();

     public patchClient(client: Client): void {
          this.patchState(client);
     }

     public getClient(): Observable<Client> {
          return this.client.asObservable();
     }
}
