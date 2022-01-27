import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ListaClientesI } from 'src/app/Models/listaclientes.interface';
import {ResponseI} from '../../../Models/response.interface'
import {ApiService} from '../../../Services/api/api.service'

@Component({
  selector: 'app-activar-cliente',
  templateUrl: './activar-cliente.component.html',
  styleUrls: ['./activar-cliente.component.css']
})
export class ActivarClienteComponent implements OnInit {

  response:ResponseI<ListaClientesI> | undefined;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('id');
    this.api.putActivarCliente(numeroCuenta).subscribe(data => {
      this.router.navigate(['home']);
    });
  }

}
