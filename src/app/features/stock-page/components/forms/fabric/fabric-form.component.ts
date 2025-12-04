import {
     Component,
     OnInit,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FabricForm } from '@shared/forms/fabric.form';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { StockFabric } from '@features/stock-page/models/stock-fabric.interface';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { OrderFabricFormConfig } from '../../modals/order-fabric/fabric-form-config';
import { List } from '@shared/interfaces/list.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Stock } from '@features/stock-page/models/stock.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
     selector: 'app-fabric-form',
     templateUrl: './fabric-form.component.html',
     styleUrls: ['./fabric-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [
          CommonModule,
          FormsModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatInputModule,
          MatSelectModule,
     ],
})
export class FabricFormComponent extends BaseFormComponent implements OnInit {
     @Input() public orderFabricFormConfig: OrderFabricFormConfig;
     @Input() public contractors: Contractor[] = [];
     @Input() public warehouses: Warehouse[] = [];
     @Input() public fabrics: List[] = [];
     @Input() public patterns: List[] = [];

     @Input() set formData(formData: Stock | null) {
          formData ? this.form.form.patchValue(formData) : null;
          this.isFormValid.emit(this.form.form.valid);
     }

     @Input() set plnToEuroActualValue(plnToEuroActualValue: string | null) {
          if (plnToEuroActualValue) {
               this.form.currency?.setValue(plnToEuroActualValue);
          }
     }

     @Output() public formChange = new EventEmitter<StockFabric>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     private currencyPipe: CurrencyPipe;

     public form: FabricForm = new FabricForm(this.fb);

     assortId = 70;

     constructor(private fb: FormBuilder) {
          super();
     }
     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
