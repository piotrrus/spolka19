import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OrdersUnsent } from '@features/orders-page/models/orders.interface';

@Component({
     selector: 'app-unsent-orders',
     templateUrl: './unsent-orders.component.html',
     styleUrls: ['./unsent-orders.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule],
})
export class UnsentOrdersComponent {
     @Input() unsentOrders: OrdersUnsent[] | null = [];
     @Output() public showUnsentOrders = new EventEmitter<boolean>();

     public showMore(): void {
          this.showUnsentOrders.emit(true);
     }
}
