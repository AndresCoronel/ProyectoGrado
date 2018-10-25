import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ConsumidorService } from './services/consumidor/consumidor.service';
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from './components/registro-consumidor/form.component';
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

const appRoutes: Routes = [
  { path: 'perfil-consumidor', component: PerfilConsumidorComponent },
  { path: 'principal', component: PaginaPrincipalComponent },
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroConsumidorComponent },
  { path: 'inicioSesion', component: LoginComponent },
  { path: 'oferta/:id_oferta', component: OfertaComponent },
  { path: 'demanda', component: DemandaComponent },
  { path: 'registro/form', component: FormComponent },
  { path: 'registro/form/:cedula_consumidor', component: FormComponent }
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
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ConsumidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
