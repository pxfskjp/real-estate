import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/Appointments',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'audit/:key',
    loadChildren: './audit/audit.module#AuditPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
