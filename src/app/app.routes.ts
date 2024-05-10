import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GestioComponent } from './pages/gestion/gestion.component';
import { DetallesVehiculoComponent } from './pages/detalles-vehiculo/detalles-vehiculo.component';
import { EditarComponent } from './pages/editar/editar.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'motos',component:VehiculoComponent},
    {path:'empleados',component:EmpleadosComponent},
    {path:'gestion',component:GestioComponent},
    { path: 'detalles/:idCarros', component: DetallesVehiculoComponent},
    { path: 'editar/:idCarros', component: EditarComponent},

    {path:'**',component:Error404Component},

];
