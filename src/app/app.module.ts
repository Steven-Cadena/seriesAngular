import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

//importamos para la navegacion
import { routing,appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

//importamos forms para los formularios 
import { FormsModule } from '@angular/forms';
import { NuevopersonajeComponent } from './components/nuevopersonaje/nuevopersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';

import { SeriesService } from './services/series.service';
import { DetallesseriesComponent } from './components/detallesseries/detallesseries.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NuevopersonajeComponent,
    ModificarpersonajeComponent,
    DetallesseriesComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
