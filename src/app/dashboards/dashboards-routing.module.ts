import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FleetmanagerComponent} from './fleetmanager/fleetmanager.component'

const routes: Routes = [

  {path :'fmdashboard',component:FleetmanagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
