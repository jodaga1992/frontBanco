import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { listaCuentasI } from 'src/app/Models/listacuentas.interface';
import {ResponseI} from '../../../Models/response.interface';
import {ApiService} from '../../../Services/api/api.service';

@Component({
  selector: 'app-activar-cuenta',
  templateUrl: './activar-cuenta.component.html',
  styleUrls: ['./activar-cuenta.component.css']
})
export class ActivarCuentaComponent implements OnInit {

  response:ResponseI<listaCuentasI> | undefined;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('numeroCuenta');
    this.api.putActivarCuenta(numeroCuenta).subscribe(data => {
      this.router.navigate(['home']);
    });
  }

}
