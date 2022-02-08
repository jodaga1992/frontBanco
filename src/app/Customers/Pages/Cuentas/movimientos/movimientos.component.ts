import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../Shared/Services/api/api.service';
import {ResponseI} from '../../../../Shared/Models/response.interface';
import { listaMovimientosI } from 'src/app/Shared/Models/listamovimientos.interface';
import { GlobalService } from 'src/app/Shared/Services/global.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  response:ResponseI<listaMovimientosI[]> | undefined;
  numeroc: any
  constructor(private activerouter:ActivatedRoute, 
    private router:Router, 
    private api:ApiService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    if(this.globalService.user.jwt==null)
    {
      this.router.navigate(['login'])
    }
    let numero = this.activerouter.snapshot.paramMap.get('numero');
    this.api.getMovimientos(numero).subscribe(data =>{
      this.response = data;
    });
    this.activerouter.params.subscribe(numcuenta =>{
      this.numeroc = numcuenta;
    });
  }

  nuevoRetiro(): void{
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('numero');
    this.router.navigate(['NuevoRetiro',numeroCuenta]);
  }

  nuevaConsignacion(): void{
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('numero');
    this.router.navigate(['NuevaConsignacion',numeroCuenta]);
  }

  nuevaTransferencia(): void{
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('numero');
    this.router.navigate(['NuevaTransferencia',numeroCuenta]);
  }

}
