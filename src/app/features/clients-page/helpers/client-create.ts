import { ClientDetailsSaveModel } from '../models/client-details.interface';
import { Client } from '../models/client.interface';

export function clientModelCreate(clientData: Client): ClientDetailsSaveModel {
     const newclient = new ClientDetailsSaveModel();

     newclient.client_nr = clientData.client_nr;
     newclient.firstname = clientData.firstname;
     newclient.lastname = clientData.lastname;
     newclient.phone = clientData.phone;
     newclient.email = clientData.email;
     return newclient;
}
