import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ListaClientesI} from '../../Models/listaclientes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ="http://localhost:8080/";

  constructor(private http:HttpClient) { }
  
  getAllCustomers():Observable<ListaClientesI[]>{
    let direccion = this.url + "clientes";
    return this.http.get<ListaClientesI[]>(direccion);
  }
}
