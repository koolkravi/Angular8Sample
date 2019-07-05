import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { FleetmanagerComponent } from './fleetmanager/fleetmanager.component';

@NgModule({
  declarations: [FleetmanagerComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
