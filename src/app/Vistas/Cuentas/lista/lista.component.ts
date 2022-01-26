import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service';
import {ResponseI} from '../../../Models/response.interface';
import {listaCuentasI} from '../../../Models/listacuentas.interface';
import {ListaClientesI} from '../../../Models/listaclientes.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  response:ResponseI | undefined;
  responsecliente:ResponseI | undefined;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let clientid = this.activerouter.snapshot.paramMap.get('id');

    this.api.getClienteId(clientid).subscribe(cliente =>{
      this.responsecliente = cliente;
    });
    
    this.api.getCuentasClientes(clientid).subscribe(data => {
      this.response = data;
    });
    
  }

  listaMovimientos(numero: any)
  {
    this.router.navigate(['MovimientosCuenta',numero]);
  }

  nuevoCliente(){
    this.router.navigate(['NuevoCliente']);
  }

  inactivarCuenta(numero: any){
    this.router.navigate(['InactivarCuenta',numero]);
  }

  activarCuenta(numero: any){
    this.router.navigate(['ActivarCuenta',numero]);
  }

  cancelarCuenta(numero: any){
    this.router.navigate(['CancelarCuenta',numero]);
  }

}
