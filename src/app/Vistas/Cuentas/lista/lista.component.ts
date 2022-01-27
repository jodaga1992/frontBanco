import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service';
import {ResponseI} from '../../../Models/response.interface';
import { listaCuentasI } from 'src/app/Models/listacuentas.interface';
import { ListaClientesI } from 'src/app/Models/listaclientes.interface';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  response:ResponseI<listaCuentasI[]> | undefined;
  responsecliente:ResponseI<ListaClientesI> | undefined;
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

  editarCliente(numero: any){
    this.router.navigate(['EditarCliente',numero]);
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

  nuevaCuenta(id: any)
  {
    this.router.navigate(['NuevaCuenta',id]);
  }

}
