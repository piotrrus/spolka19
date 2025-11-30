import { NgModule } from '@angular/core';
import { NoticeFormComponent } from './notice-form.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/modules/material-module';
import { BootstrapModule } from '@shared/modules/bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
     declarations: [NoticeFormComponent],
     exports: [NoticeFormComponent],
     imports: [CommonModule, MaterialModule, BootstrapModule, FormsModule, ReactiveFormsModule],
})
export class NoticeFormModule {}
