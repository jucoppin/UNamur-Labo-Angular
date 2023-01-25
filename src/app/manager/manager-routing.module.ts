import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerListComponent } from "./pages/manager-list/manager-list.component";
import { ManagerComponent } from "./pages/manager/manager.component";

const routes: Routes = [
  {
    path: '',
    component: ManagerListComponent
  },
  {
    path: 'create',
    component: ManagerComponent,
  },
  {
    path: ':id',
    component: ManagerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {
}
