import { AreasDetailComponent } from './components/areas-detail/areas-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
// Areas
import { AreasComponent } from './components/areas/areas.component';
import { CrearAreasComponent } from './components/crear-areas/crear-areas.component';
import { ErrorComponent } from './components/error/error.component';
// Dashboard
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  // Usuarios Path
	{path : '', component: UsuariosComponent},
	{path : 'usuarios', component: UsuariosComponent},
  {path : 'crear-usuarios', component: CreateComponent},
  {path : 'usuario/:id', component: DetailComponent},
  {path : 'editar-usuario/:id', component: EditComponent},
  // Areas Path
  {path : 'areas', component: AreasComponent},
  {path : 'crear-areas', component: CrearAreasComponent},
  {path : 'areas/:id', component: AreasDetailComponent},
  // Dashboard Path
  {path : 'dashboard', component: DashboardComponent},
  // Error Path
	{path : '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
