import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AdminPageComponent } from './admin-page.component';
import { UserModalHelper } from '../../user/helpers/user-modal.helper';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { UsersTableComponent } from '../components/tables/users-table/users-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AdminUsersService } from '../services/admin-users.service';
import { AdminUsersDataStore } from '../services/admin-users-data-store';

describe('AdminPageComponent', () => {
     let component: AdminPageComponent;
     let fixture: ComponentFixture<AdminPageComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [
                    HttpClientTestingModule,
                    MatDialogModule,
                    NgxDatatableModule,
                    ToastrModule.forRoot(),
               ],
               declarations: [AdminPageComponent, TableHeaderComponent, UsersTableComponent],
               providers: [
                    AdminUsersService,
                    AdminUsersDataStore,
                    UserModalHelper,
                    MatDialog,
                    {
                         provide: MatDialogRef,
                         useValue: {},
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();

          fixture = TestBed.createComponent(AdminPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
