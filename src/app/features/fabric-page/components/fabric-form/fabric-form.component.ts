import {
     Component,
     OnInit,
     Input,
     Output,
     EventEmitter,
     ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FabricForm } from '@shared/forms/fabric.form';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { FabricStock } from '../../models/fabric.interface';

@Component({
     selector: 'app-fabric-form',
     templateUrl: './fabric-form.component.html',
     styleUrls: ['./fabric-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabricFormComponent extends BaseFormComponent implements OnInit {
     @Input() public set formData(value: FabricStock) {
          this.form.form.patchValue(value);
     }
     @Input() public contractors: Contractor[] = [];
     @Output() public formChange = new EventEmitter<FabricStock>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: FabricForm = new FabricForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
