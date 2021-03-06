import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { DetallesPeliculaComponent } from './components/detalles-pelicula/detalles-pelicula.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { BtnFavoritosComponent } from './components/btn-favoritos/btn-favoritos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarjetaPeliculasPrincipalesComponent } from './components/tarjeta-peliculas-principales/tarjeta-peliculas-principales.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { TarjetaPeliculasComponent } from './components/tarjeta-peliculas/tarjeta-peliculas.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    PeliculasComponent,
    ListaPeliculasComponent,
    DetallesPeliculaComponent,
    ReservaComponent,
    FavoritosComponent,
    BtnFavoritosComponent,
    TarjetaPeliculasPrincipalesComponent,
    BuscadorComponent,
    PaginacionComponent,
    TarjetaPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
