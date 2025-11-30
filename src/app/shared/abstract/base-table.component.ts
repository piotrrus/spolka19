import { Component, Input } from '@angular/core';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
     template: '',
})
export abstract class BaseTableComponent {
     @Input() public tableTitle = '';
     @Input() public tableData: unknown[] | null = [];

     public columnMode = ColumnMode;
     public noDataMessage = { emptyMessage: COMMON_MESSAGES.NO_DATA_MESSAGE };
}
