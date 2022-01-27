import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ListaClientesI} from '../../Models/listaclientes.interface';
import {ResponseI} from '../../Models/response.interface'
import { Observable } from 'rxjs';
import { listaCuentasI } from 'src/app/Models/listacuentas.interface';
import { listaMovimientosI } from 'src/app/Models/listamovimientos.interface';
import { TransaccionI } from 'src/app/Models/transaccion.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cliente:ListaClientesI | undefined;
  url:string ="http://localhost:8080/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  constructor(private http:HttpClient) { }
  
  getAllCustomers():Observable<ResponseI<ListaClientesI[]>>{
    let direccion = this.url + "clientes";
    let response = this.http.get<ResponseI<ListaClientesI[]>>(direccion);
    //return this.http.get<ListaClientesI[]>(direccion);
    return response
  }

  getCuentasClientes(id:any):Observable<ResponseI<listaCuentasI[]>>{
    let direccion = this.url + "productos/" + id;
    let response = this.http.get<ResponseI<listaCuentasI[]>>(direccion);
    //return this.http.get<ListaClientesI[]>(direccion);
    return response
  }

  getClienteId(id:any):Observable<ResponseI<ListaClientesI>>{
    let direccion = this.url + "clientes/" + id;
    let response = this.http.get<ResponseI<ListaClientesI>>(direccion);
    //return this.http.get<ListaClientesI[]>(direccion);
    return response
  }

  getMovimientos(numero:any):Observable<ResponseI<listaMovimientosI[]>>
  {
    let direccion = this.url + "productos/" + numero + "/movimientos";
    let response = this.http.get<ResponseI<listaMovimientosI[]>>(direccion);
    //return this.http.get<ListaClientesI[]>(direccion);
    return response;
  }

  actualizarCliente(form:ListaClientesI):Observable<ResponseI<ListaClientesI>>
  {
    let direccion = this.url + "clientes/actualizar";
    let response = this.http.put<ResponseI<ListaClientesI>>(direccion,form,this.httpOptions);
    return response
  }

  putInactivarCliente(id:any):Observable<ResponseI<ListaClientesI>>
  {
    let direccion = this.url + "clientes/" + id + "/inactivar";
    let response = this.http.put<ResponseI<ListaClientesI>>(direccion,this.httpOptions);
    return response;
  }

  putActivarCliente(id:any):Observable<ResponseI<ListaClientesI>>
  {
    let direccion = this.url + "clientes/" + id + "/activar";
    let response = this.http.put<ResponseI<ListaClientesI>>(direccion,this.httpOptions);
    return response;
  }

  putInactivarCuenta(numeroCuenta:any):Observable<ResponseI<listaCuentasI>>
  {
    let direccion = this.url + "productos/" + numeroCuenta + "/inactivar";
    let response = this.http.put<ResponseI<listaCuentasI>>(direccion,this.httpOptions);
    return response;
  }

  putActivarCuenta(numeroCuenta:any):Observable<ResponseI<listaCuentasI>>
  {
    let direccion = this.url + "productos/" + numeroCuenta + "/activar";
    let response = this.http.put<ResponseI<listaCuentasI>>(direccion,this.httpOptions);
    return response;
  }

  putCancelarCuenta(numeroCuenta:any):Observable<ResponseI<listaCuentasI>>
  {
    let direccion = this.url + "productos/" + numeroCuenta + "/cancelar";
    let response = this.http.put<ResponseI<listaCuentasI>>(direccion,this.httpOptions);
    return response;
  }

  guardarCliente(form:ListaClientesI):Observable<ResponseI<ListaClientesI>>
  {
    let direccion = this.url + "clientes";
    let id: number = +form.id;
    form.id = id;
    let response = this.http.post<ResponseI<ListaClientesI>>(direccion,form);
    console.log(form);
    return response;
  }

  guardarCuenta(form:listaCuentasI):Observable<ResponseI<listaCuentasI>>
  {
    let direccion = this.url + "productos";
    let id: number = +form.idCliente;
    form.idCliente = id;
    let response = this.http.post<ResponseI<listaCuentasI>>(direccion,form);
    return response;
  }

  postTransaccion(form:TransaccionI):Observable<ResponseI<TransaccionI>>
  {
    let direccion = this.url + "transacciones";
    let monto: number = +form.monto;
    form.monto = monto;
    let response = this.http.post<ResponseI<TransaccionI>>(direccion,form)
    return response
  }

}
