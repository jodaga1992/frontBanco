import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service'
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';
import { listaCuentasI } from 'src/app/Models/listacuentas.interface';
import {AlertasService} from '../../../Services/alertas/alertas.service';
import { ResponseI } from 'src/app/Models/response.interface';

@Component({
  selector: 'app-nueva-cuenta',
  templateUrl: './nueva-cuenta.component.html',
  styleUrls: ['./nueva-cuenta.component.css']
})
export class NuevaCuentaComponent implements OnInit {

  response:ResponseI<listaCuentasI> | undefined;
  clienteid: any | undefined;
  editorform = new FormGroup({
    tipo: new FormControl('')
  });
  constructor(private activeroute: ActivatedRoute, private router:Router, private api:ApiService,private alertas:AlertasService) { }

  ngOnInit(): void {
    this.clienteid = this.activeroute.snapshot.paramMap.get('id');
    this.editorform.setValue({
      'tipo':"Ahorros"
    })
  }
  postForm(form:listaCuentasI)
  {
    form.idCliente = this.clienteid;
    this.api.guardarCuenta(form).subscribe(data =>
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
        this.router.navigate(['ListaCuentas',this.clienteid])
      })
  }
}
