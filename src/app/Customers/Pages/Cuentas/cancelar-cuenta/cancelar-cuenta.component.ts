import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { listaCuentasI } from 'src/app/Shared/Models/listacuentas.interface';
import {ResponseI} from '../../../../Shared/Models/response.interface';
import {ApiService} from '../../../../Shared/Services/api/api.service';
import {AlertasService} from '../../../../Shared/Services/alertas/alertas.service';
import { GlobalService } from 'src/app/Shared/Services/global.service';

@Component({
  selector: 'app-cancelar-cuenta',
  templateUrl: './cancelar-cuenta.component.html',
  styleUrls: ['./cancelar-cuenta.component.css']
})
export class CancelarCuentaComponent implements OnInit {

  response:ResponseI<listaCuentasI> | undefined;
  constructor(private activerouter:ActivatedRoute, 
    private router:Router, 
    private api:ApiService,
    private alertas:AlertasService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    if(this.globalService.user.jwt==null)
    {
      this.router.navigate(['login'])
    }
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('numeroCuenta');
    this.api.putCancelarCuenta(numeroCuenta).subscribe(data => {
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
