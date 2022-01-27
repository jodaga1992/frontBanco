import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { listaCuentasI } from 'src/app/Models/listacuentas.interface';
import {ResponseI} from '../../../Models/response.interface';
import {ApiService} from '../../../Services/api/api.service';
import {AlertasService} from '../../../Services/alertas/alertas.service';

@Component({
  selector: 'app-activar-cuenta',
  templateUrl: './activar-cuenta.component.html',
  styleUrls: ['./activar-cuenta.component.css']
})
export class ActivarCuentaComponent implements OnInit {

  response:ResponseI<listaCuentasI> | undefined;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService, private alertas:AlertasService) { }

  ngOnInit(): void {
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('numeroCuenta');
    this.api.putActivarCuenta(numeroCuenta).subscribe(data => {
      this.response = data
      if(this.response.success=true)
      {
        if(this.response.codigo==0)
        {
          this.alertas.showSucces(this.response.message,'Hecho')
        }
        else
        {
          this.alertas.shiwWarning(this.response.message,'Transaccion no ejecutada')
        }
      }
      else
      {
        this.alertas.showError(this.response.message,'Error')
      }
      this.router.navigate(['home']);
    });
  }

}
