import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./shared/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/managers'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'managers',
        loadChildren: () => import('./manager/manager.module').then(x => x.ManagerModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
