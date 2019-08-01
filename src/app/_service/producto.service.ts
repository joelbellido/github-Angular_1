import { HttpClient } from '@angular/common/http';
import { HOST } from './../_shared/var.constants';
import { Injectable } from '@angular/core';
import { ProductoListaInsumo } from '../_model/productoListaInsumo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  url: string = `${HOST}/productos`;

  constructor(private http:HttpClient ) { }

  registrar(productoDTO:ProductoListaInsumo){

    return this.http.post(this.url,productoDTO);

  }



}
