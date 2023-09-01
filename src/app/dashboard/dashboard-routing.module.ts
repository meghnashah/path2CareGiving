import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard-day1',
    pathMatch: 'full',
  },
  {
    path: 'dashboard-day1',
    component: MainComponent,
  },
  {
    path: 'admin_dashboard',
    component: Dashboard2Component,
  },
  {
    path: 'dashboard3',
    component: Dashboard3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}