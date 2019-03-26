import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ConsumidorService } from './services/consumidor/consumidor.service';
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from './components/registro-consumidor/form.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { RegistroConsumidorComponent } from './components/registro-consumidor/registro-consumidor.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { DemandaComponent } from './components/demanda/demanda.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilConsumidorComponent } from './components/perfil-consumidor/perfil-consumidor.component';
import {AgmCoreModule} from   '@agm/core';
//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import {MaterialModule} from "./material";
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
//Graficos
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './components/grafico/grafico.component';
//paginacion
import {NgxPaginationModule} from 'ngx-pagination';
import { FiltroProductorPipe } from './pipes/productor/filtro-productor.pipe';
import { ProductoPipe } from './pipes/producto.pipe';
import { PrecioPipe } from './pipes/precio.pipe';
import { ZonaPipe } from './pipes/zona.pipe';
import { CantidadPipe } from './pipes/cantidad.pipe';
import { FechaPipe } from './pipes/fecha.pipe';
import { ProductorComponent } from './components/productor/productor.component';
import { ApellidoProductorPipe } from './pipes/productor/apellido-productor.pipe';
import { SexoProductorPipe } from './pipes/productor/sexo-productor.pipe';
import { PerfilProductorComponent } from './components/productor/perfil-productor/perfil-productor.component';
import { VariedadPipe } from './pipes/variedad.pipe';

const appRoutes: Routes = [
  { path: 'perfil-consumidor', component: PerfilConsumidorComponent },
  { path: 'principal', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroConsumidorComponent },
  { path: 'inicioSesion', component: LoginComponent },
  { path: 'oferta/:id_oferta', component: OfertaComponent },
  { path: 'demanda', component: DemandaComponent },
  { path: 'registro/form', component: FormComponent },
  { path: 'registro/form/:cedula_consumidor', component: FormComponent },
  { path: 'productor', component: ProductorComponent },
  { path: 'productor/:cedula_productor', component: PerfilProductorComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    RegistroConsumidorComponent,
    LoginComponent,
    HomeComponent,
    PaginaPrincipalComponent,
    OfertaComponent,
    DemandaComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    PerfilConsumidorComponent,
    BarraNavegacionComponent,
    GraficoComponent,
    FiltroProductorPipe,
    ProductoPipe,
    PrecioPipe,
    ZonaPipe,
    CantidadPipe,
    FechaPipe,
    ProductorComponent,
    ApellidoProductorPipe,
    SexoProductorPipe,
    PerfilProductorComponent,
    VariedadPipe

  
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyADXoaV6DsrjRMBT1yfjNBPyy0KGG2tymc'
    }),
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ConsumidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
