import { AbstractControl } from '@angular/forms';
import { DateHandler } from '@shared/utils/date/date.handler';

export function clientEventsValidator(control: AbstractControl): void {
     const deliveryDate: string = control.get('deliveryDate')?.value as string;
     const probeDate: string = control.get('probeDate')?.value as string;
     const measureDate: string = control.get('measureDate')?.value as string;

     const diff1 = probeDate && deliveryDate ? DateHandler.compareDates(deliveryDate, probeDate) : false;
     const diff2 = measureDate && deliveryDate ? DateHandler.compareDates(deliveryDate, measureDate) : false;

     if (diff1 || diff2) {
          control.get('deliveryDate')?.setErrors({ deliveryDateIsBefore: true });
     }
}
