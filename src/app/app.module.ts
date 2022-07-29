import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { MarketComponent } from './market/market.component';
import { SelectionComponent } from './selection/selection.component';
import { LoadingComponent } from './loading/loading.component';
import { RegionComponent } from './region/region.component';
import { TopLoaderComponent } from './top-loader/top-loader.component';
import { TopSelectorComponent } from './top-selector/top-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    MarketComponent,
    SelectionComponent,
    LoadingComponent,
    RegionComponent,
    TopLoaderComponent,
    TopSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
