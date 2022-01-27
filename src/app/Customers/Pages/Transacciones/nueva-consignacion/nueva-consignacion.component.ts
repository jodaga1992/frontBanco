import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../Shared/Services/api/api.service'
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';
import {TransaccionI} from '../../../../Shared/Models/transaccion.interface'
import {AlertasService} from '../../../../Shared/Services/alertas/alertas.service';
import { ResponseI } from 'src/app/Shared/Models/response.interface';

@Component({
  selector: 'app-nueva-consignacion',
  templateUrl: './nueva-consignacion.component.html',
  styleUrls: ['./nueva-consignacion.component.css']
})
export class NuevaConsignacionComponent implements OnInit {

  response: ResponseI<TransaccionI> | undefined
  editorform = new FormGroup({
    monto: new FormControl('')
  });
  constructor(private activeroute: ActivatedRoute, private router:Router, private api:ApiService, private alertas:AlertasService) { }

  ngOnInit(): void {
  }
  postForm(form:TransaccionI)
  {
    let numeroCuenta = this.activeroute.snapshot.paramMap.get('numeroCuenta');
    let monto: number = +form.monto
    form.monto = monto
    console.log(numeroCuenta);
    form.tipo = "Consignacion";
    if(numeroCuenta)
    {
      form.cuentaDestino = +numeroCuenta;
    }
    this.api.postTransaccion(form).subscribe(data =>
      {
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
        this.router.navigate(['MovimientosCuenta',numeroCuenta])
      })
  }

}
