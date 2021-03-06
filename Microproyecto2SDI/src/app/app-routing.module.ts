import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'lista-peliculas', component: ListaPeliculasComponent},
  {path: 'detalles-pelicula', component: DetallesPeliculaComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'btn-favoritos', component: BtnFavoritosComponent},
  {path: 'tarjeta-peliculas', component: TarjetaPeliculasComponent},
  {path: 'buscador', component: BuscadorComponent},
  {path: 'paginacion', component: PaginacionComponent},
  {path: 'tarjeta-peliculas-principales', component: TarjetaPeliculasPrincipalesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
