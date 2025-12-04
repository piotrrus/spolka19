import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { AdminPageComponent } from './containers/admin-page.component';
import { AdminUsersService } from './services/admin-users.service';
import { UsersTableComponent } from './components/tables/users-table/users-table.component';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { UserModalComponent } from './components/modals/user-modal/user-modal.component';
import { UserModalHelper } from '../user/helpers/user-modal.helper';
import { AdminUsersDataStore } from './services/admin-users-data-store';
import { UserFormComponent } from '../user/components/forms/user-form/user-form.component';
import { ChangePasswordModalComponent } from './components/modals/change-password-modal/change-password-modal.component';
import { ChangePasswordFormComponent } from '../user/components/forms/change-password-form/change-password-form.component';
import { ChangePasswordModalHelper } from '../user/helpers/change-password-modal.helper';

@NgModule({
     declarations: [
          AdminPageComponent,
          UsersTableComponent,
          UserModalComponent,
          UserFormComponent,
          ChangePasswordModalComponent,
          ChangePasswordFormComponent,
     ],
     imports: [SharedModule, AdminPageRoutingModule],
     providers: [AdminUsersService, UserModalHelper, AdminUsersDataStore, ChangePasswordModalHelper],
})
export class AdminPageModule {}
