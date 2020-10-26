import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuditPage } from './audit.page';
import { AuditPageRoutingModule } from './audit-routing.module';
import {Camera} from '@ionic-native/camera/ngx';
import { CommonModule } from '@angular/common';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { FormlyModule } from '@ngx-formly/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AuditPageRoutingModule,
    FormlyModule.forRoot(),
    FormlyIonicModule,
    IonicModule
  ],
  declarations: [AuditPage],
  providers: [Camera]
})
export class AuditPageModule {}
