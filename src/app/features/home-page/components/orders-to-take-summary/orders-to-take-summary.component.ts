import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '@features/orders-page/models/orders.interface';

@Component({
     selector: 'app-orders-to-take-summary',
     templateUrl: './orders-to-take-summary.component.html',
     styleUrls: ['./orders-to-take-summary.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersToTakeSummaryComponent {
     @Input() ordersToTake: Order[] | null = null;
     @Output() public ordersToTakeRedirect = new EventEmitter<boolean>();

     public showOrders(): void {
          this.ordersToTakeRedirect.emit(true);
     }
}
