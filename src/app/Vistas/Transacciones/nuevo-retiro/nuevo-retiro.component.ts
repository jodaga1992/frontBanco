import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service'
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';
import {TransaccionI} from '../../../Models/transaccion.interface'
import {AlertasService} from '../../../Services/alertas/alertas.service';
import { ResponseI } from 'src/app/Models/response.interface';

@Component({
  selector: 'app-nuevo-retiro',
  templateUrl: './nuevo-retiro.component.html',
  styleUrls: ['./nuevo-retiro.component.css']
})
export class NuevoRetiroComponent implements OnInit {

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
    form.tipo = "Retiro";
    if(numeroCuenta)
    {
      form.cuentaOrigen = +numeroCuenta;
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
