import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pelicula } from "./pelicula.interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  Apikey = "";
  getPost():Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.Apikey, {
      params: {
        por_pagina: "8"
      }
    })
  }


}
