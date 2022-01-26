import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ListaClientesI} from '../../Models/listaclientes.interface';
import {ResponseI} from '../../Models/response.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ="http://localhost:8080/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(private http:HttpClient) { }
  
  getAllCustomers():Observable<ResponseI>{
    let direccion = this.url + "clientes";
    let response = this.http.get<ResponseI>(direccion);
    //return this.http.get<ListaClientesI[]>(direccion);
    return response
  }

  getCuentasClientes(id:any):Observable<ResponseI>{
    let direccion = this.url + "productos/" + id;
    let response = this.http.get<ResponseI>(direccion);
    //return this.http.get<ListaClientesI[]>(direccion);
    return response
  }

  getClienteId(id:any):Observable<ResponseI>{
    let direccion = this.url + "clientes/" + id;
    let response = this.http.get<ResponseI>(direccion);
    //return this.http.get<ListaClientesI[]>(direccion);
    return response
  }

  getMovimientos(numero:any):Observable<ResponseI>
  {
    let direccion = this.url + "productos/" + numero + "/movimientos";
    let response = this.http.get<ResponseI>(direccion);
    //return this.http.get<ListaClientesI[]>(direccion);
    return response;
  }

  putInactivarCuenta(numeroCuenta:any):Observable<ResponseI>
  {
    let direccion = this.url + "productos/" + numeroCuenta + "/inactivar";
    let response = this.http.put<ResponseI>(direccion,this.httpOptions);
    return response;
  }

  putActivarCuenta(numeroCuenta:any):Observable<ResponseI>
  {
    let direccion = this.url + "productos/" + numeroCuenta + "/activar";
    let response = this.http.put<ResponseI>(direccion,this.httpOptions);
    return response;
  }

  putCancelarCuenta(numeroCuenta:any):Observable<ResponseI>
  {
    let direccion = this.url + "productos/" + numeroCuenta + "/cancelar";
    let response = this.http.put<ResponseI>(direccion,this.httpOptions);
    return response;
  }
}
