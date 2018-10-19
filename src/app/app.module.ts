import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RegistroConsumidorComponent } from './components/registro-consumidor/registro-consumidor.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { DemandaComponent } from './components/demanda/demanda.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilConsumidorComponent } from './components/perfil-consumidor/perfil-consumidor.component';
//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import {MaterialModule} from "./material";
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';





const appRoutes: Routes =[
  {
    path:'', component: HomeComponent
  },
  {
    path:'registro', component: RegistroConsumidorComponent
  },
  {
    path:'inicioSesion', component: LoginComponent
  },
  {
    path: 'oferta', component: OfertaComponent
  },
  {
    path: 'demanda', component: DemandaComponent
  },
  {
    path: 'perfil-consumidor', component: PerfilConsumidorComponent
  }
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
    PerfilConsumidorComponent,
    BarraNavegacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
