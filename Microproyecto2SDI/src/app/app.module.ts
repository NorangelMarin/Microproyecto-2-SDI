import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Modulos de Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Import de Environment
import { environment } from "src/environments/environment"

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

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
