import {
     Component,
     Input,
     Output,
     ChangeDetectionStrategy,
     EventEmitter,
     OnInit,
     input,
     effect,
     computed,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductionForm } from '@shared/forms/production.form';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { AfterProduction } from '@features/production-page/models/production.interface';
import { Assorts } from '@shared/enums/assorts.enum';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

@Component({
     selector: 'app-production-edit-form',
     templateUrl: './production-edit-form.component.html',
     styleUrls: ['./production-edit-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [
          CommonModule,
          FormsModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatInputModule,
          MatRadioModule,
     ],
})
export class ProductionEditFormComponent extends BaseFormComponent implements OnInit {
     public formDatax = input<AfterProduction | null>();

     //  productionData =
     //        computed(() =>
     //        {
     //                     if (this.formData) {
     //           this.form.form.patchValue(productionData);
     //           this.assortId = productionData.id_assort;
     //           this.assortName = productionData.art_name;
     //           this.hasTrousers = this.assortId < 6 || this.assortId === Assorts.TROUSERS;
     //           this.isCoat = this.assortId === Assorts.COAT;
     //           this.hasVest = this.assortId === 2 || this.assortId === 4 || this.assortId === 7;
     //           this.hasSize = productionData.hasSize;
     //      }
     //                //   this.formData
     //        }
     //      );

     @Input() public set formData(productionData: AfterProduction | null) {
          if (productionData) {
               this.form.form.patchValue(productionData);
               this.assortId = productionData.id_assort;
               this.assortName = productionData.art_name;
               this.hasTrousers = this.assortId < 6 || this.assortId === Assorts.TROUSERS;
               this.isCoat = this.assortId === Assorts.COAT;
               this.hasVest = this.assortId === 2 || this.assortId === 4 || this.assortId === 7;
               this.hasSize = productionData.hasSize;
          }
     }

     // public formChange = output<boolean>();

     @Output() public formChange = new EventEmitter<AfterProduction>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ProductionForm = new ProductionForm(this.fb);
     public assortId: number;
     public assortName: string;
     public hasTrousers: boolean;
     public isCoat: boolean;
     public hasVest: boolean;
     public hasSize: boolean;
     public assorts = Assorts;

     constructor(private fb: FormBuilder) {
          super();

          //         effect(() => {
          //  if (this.formData())  {
          //           this.form.form.patchValue(productionData);
          //           this.assortId = productionData.id_assort;
          //           this.assortName = productionData.art_name;
          //           this.hasTrousers = this.assortId < 6 || this.assortId === Assorts.TROUSERS;
          //           this.isCoat = this.assortId === Assorts.COAT;
          //           this.hasVest = this.assortId === 2 || this.assortId === 4 || this.assortId === 7;
          //           this.hasSize = productionData.hasSize;
          //  }

          //     });
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     private handleInputs(): void {
          // if (this.formDatax()) {
          //      const productionData = this.formDatax();
          //      this.form.form.patchValue(productionData);
          //      this.assortId = productionData.id_assort;
          //      this.assortName = productionData.art_name;
          //      this.hasTrousers = this.assortId < 6 || this.assortId === Assorts.TROUSERS;
          //      this.isCoat = this.assortId === Assorts.COAT;
          //      this.hasVest = this.assortId === 2 || this.assortId === 4 || this.assortId === 7;
          //      this.hasSize = productionData.hasSize;
          // }
     }
}
