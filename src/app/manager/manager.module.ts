import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerListComponent } from './pages/manager-list/manager-list.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { ManagerService } from "./services/manager.service";
import { ReactiveFormsModule } from "@angular/forms";
import { ManagerMockService } from "./services/manager-mock.service";


@NgModule({
  declarations: [
    ManagerListComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ManagerService,
    ManagerMockService,
  ],
})
export class ManagerModule {
}
