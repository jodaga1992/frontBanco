import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Services/api/api.service';
import {Router} from '@angular/router';

import {ListaClientesI } from '../../Models/listaclientes.interface';
import {ResponseI} from '../../Models/response.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //clientes:ListaClientesI[] | undefined;
  response:ResponseI | undefined;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllCustomers().subscribe(data =>{
      this.response= data;
    })
  }

  listaCuentas(id: any){
    this.router.navigate(['ListaCuentas',id]);
  }

  nuevoCliente(){
    this.router.navigate(['NuevoCliente']);
  }
}
