import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { listaCuentasI } from 'src/app/Models/listacuentas.interface';
import {ResponseI} from '../../../Models/response.interface'
import {ApiService} from '../../../Services/api/api.service'

@Component({
  selector: 'app-inactivar',
  templateUrl: './inactivar.component.html',
  styleUrls: ['./inactivar.component.css']
})
export class InactivarComponent implements OnInit {

  response:ResponseI<listaCuentasI> | undefined;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('numeroCuenta');
    this.api.putInactivarCuenta(numeroCuenta).subscribe(data => {
      this.router.navigate(['home']);
    });
  }

}
