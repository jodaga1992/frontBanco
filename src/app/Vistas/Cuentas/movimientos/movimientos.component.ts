import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service';
import {ResponseI} from '../../../Models/response.interface';
import { listaMovimientosI } from 'src/app/Models/listamovimientos.interface';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  response:ResponseI<listaMovimientosI[]> | undefined;
  numeroc: any
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let numero = this.activerouter.snapshot.paramMap.get('numero');
    this.api.getMovimientos(numero).subscribe(data =>{
      this.response = data;
    });
    this.activerouter.params.subscribe(numcuenta =>{
      this.numeroc = numcuenta;
    });
    
  }

}
