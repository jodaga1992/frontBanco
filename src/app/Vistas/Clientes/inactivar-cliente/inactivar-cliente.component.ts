import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ListaClientesI } from 'src/app/Models/listaclientes.interface';
import {ResponseI} from '../../../Models/response.interface'
import {ApiService} from '../../../Services/api/api.service'

@Component({
  selector: 'app-inactivar-cliente',
  templateUrl: './inactivar-cliente.component.html',
  styleUrls: ['./inactivar-cliente.component.css']
})
export class InactivarClienteComponent implements OnInit {

  response:ResponseI<ListaClientesI> | undefined;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('id');
    this.api.putInactivarCliente(numeroCuenta).subscribe(data => {
      this.router.navigate(['home']);
    });
  }

}
