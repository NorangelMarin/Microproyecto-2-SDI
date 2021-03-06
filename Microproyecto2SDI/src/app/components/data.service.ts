import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './pelicula.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  Apiurl = 'https://api.themoviedb.org/3/movie/550?api_key=45de787fddd0a31b33ab5815e5b2ef85';
  getPost(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.Apiurl, {
      params: {
        por_pagina: '8'
      }
    });
  }


}
