import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../Shared/Services/api/api.service';
import {ResponseI} from '../../../../Shared/Models/response.interface';
import { listaCuentasI } from 'src/app/Shared/Models/listacuentas.interface';
import { ListaClientesI } from 'src/app/Shared/Models/listaclientes.interface';
import { GlobalService } from 'src/app/Shared/Services/global.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  response:ResponseI<listaCuentasI[]> | undefined;
  responsecliente:ResponseI<ListaClientesI> | undefined;
  constructor(private activerouter:ActivatedRoute, 
    private router:Router, 
    private api:ApiService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    if(this.globalService.user.jwt==null)
    {
      this.router.navigate(['login'])
    }
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
