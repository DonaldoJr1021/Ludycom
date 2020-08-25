import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';



import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { AreasComponent } from './components/areas/areas.component';
import { AreasDetailComponent } from './components/areas-detail/areas-detail.component';
import { AreasEditComponent } from './components/areas-edit/areas-edit.component';
import { CrearAreasComponent } from './components/crear-areas/crear-areas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CreateComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    AreasComponent,
    AreasDetailComponent,
    AreasEditComponent,
    CrearAreasComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
