import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 // { path: 'orders',  component:OrderComponent },
 // { path: 'orders/:id', component: OrderDetailComponent },
  { path: '',  redirectTo: '/fmdashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
