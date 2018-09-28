import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroConsumidorComponent } from './components/registro-consumidor/registro-consumidor.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { DemandaComponent } from './components/demanda/demanda.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroConsumidorComponent,
    LoginComponent,
    HomeComponent,
    PaginaPrincipalComponent,
    OfertaComponent,
    DemandaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
