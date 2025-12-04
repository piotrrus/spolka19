import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { User } from '@features/admin-page/models/user.interface';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { UsersDataTableColumns } from './users-data-table-columns';

@Component({
     selector: 'app-users-table',
     templateUrl: './users-table.component.html',
     styleUrls: ['./users-table.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent extends BaseTableComponent {
     @Output() public showDetailsModal = new EventEmitter<User>();
     @Output() public confirmDeleteModal = new EventEmitter<User>();

     public dataTableColumns = UsersDataTableColumns;

     public showDetails($event: User): void {
          this.showDetailsModal.emit($event);
     }

     public deleteUser($event: User): void {
          this.confirmDeleteModal.emit($event);
     }
}
