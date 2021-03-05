import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PeliculasComponent,
    ListaPeliculasComponent,
    DetallesPeliculaComponent,
    ReservaComponent,
    FavoritosComponent,
    BtnFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
