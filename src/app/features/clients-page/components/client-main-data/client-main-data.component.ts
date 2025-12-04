import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Client } from '@features/clients-page/models/client.interface';

@Component({
     selector: 'app-client-main-data',
     templateUrl: './client-main-data.component.html',
     styleUrls: ['./client-main-data.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class ClientMainDataComponent {
     @Input() public clientData: Client | null = null;

     @Output() public isDelete = new EventEmitter<boolean>();
     public deleteClient(): void {
          this.isDelete.emit(true);
     }
}
