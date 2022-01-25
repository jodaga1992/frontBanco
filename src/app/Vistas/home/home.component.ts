import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Services/api/api.service';
import {Router} from '@angular/router';

import {ListaClientesI } from '../../Models/listaclientes.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes:ListaClientesI[] | undefined;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllCustomers().subscribe(data =>{
      this.clientes= data;
    })
  }

  editarCliente(id: any){
    console.log(id);
  }

  nuevoCliente(){
    this.router.navigate(['NuevoCliente']);
  }
}
