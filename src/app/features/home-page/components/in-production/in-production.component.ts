import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
     // standalone: false,
     selector: 'app-in-production',
     templateUrl: './in-production.component.html',
     styleUrls: ['./in-production.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InProductionComponent {
     @Input() sentToProduction: number | null = null;
     @Output() public productionOrdersRedirect = new EventEmitter<boolean>();

     public showOrders(): void {
          this.productionOrdersRedirect.emit(true);
     }
}
