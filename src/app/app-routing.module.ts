import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { MarketComponent } from './market/market.component';
import { RegionComponent } from './region/region.component';
import { RoutesComponent } from './routes/routes.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: 'region', component:  RegionComponent},
  { path: 'market', component:  MarketComponent},
  { path: 'routes', component:  RoutesComponent},
  { path: 'selection', component:  SelectionComponent},
  { path: 'loading', component:  LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
