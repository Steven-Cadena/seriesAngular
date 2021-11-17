import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DetallesseriesComponent } from './components/detallesseries/detallesseries.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { NuevopersonajeComponent } from './components/nuevopersonaje/nuevopersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
const appRoutes: Routes = [
    {path:"",component: HomeComponent},
    {path:"detallesseries/:idserie",component: DetallesseriesComponent},
    {path:"personajes/:idserie",component: PersonajesComponent},
    {path:"nuevopersonaje",component: NuevopersonajeComponent},
    {path:"modificar",component: ModificarpersonajeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);