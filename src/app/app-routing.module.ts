import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { RoutesComponent } from './routes/routes.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: 'market', component:  MarketComponent},
  { path: 'routes', component:  RoutesComponent},
  { path: 'selection', component:  SelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
