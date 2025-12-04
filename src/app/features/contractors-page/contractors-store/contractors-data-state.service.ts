import { Observable, Subject } from 'rxjs';
import { State } from '@core/state/state';
import { Contractor } from '../models/contractor.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ContractorState extends State<Contractor> {
     constructor() {
          super(<Contractor>{});
     }
     private contractors: Subject<Contractor[]> = new Subject<Contractor[]>();

     public patchContractor(contractors: Contractor): void {
          this.patchState(contractors);
     }

     public getContractor(): Observable<Contractor[]> {
          return this.contractors.asObservable();
     }
}
