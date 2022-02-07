import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Shared/Services/api/api.service';
import {Router} from '@angular/router';

import {ListaClientesI } from '../../Shared/Models/listaclientes.interface';
import {ResponseI} from '../../Shared/Models/response.interface';
import { GlobalService } from 'src/app/Shared/Services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //clientes:ListaClientesI[] | undefined;
  response:ResponseI<ListaClientesI[]> | undefined;

  constructor(private api:ApiService, private router:Router, private globalService: GlobalService ) { }

  ngOnInit(): void {
    if(this.globalService.user.jwt==null)
    {
      this.router.navigate(['login'])
    }
    else
    {
      this.api.getAllCustomers().subscribe(data =>{
        this.response= data;
      })
    }
  }

  listaCuentas(id: any){
    this.router.navigate(['ListaCuentas',id]);
  }

  nuevoCliente(){
    this.router.navigate(['NuevoCliente']);
  }

  inactivarCliente(id: any){
    this.router.navigate(['InactivarCliente',id]);
  }

  activarCliente(id: any){
    this.router.navigate(['ActivarCliente',id]);
  }
}
