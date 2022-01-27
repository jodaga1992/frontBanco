import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service'
import {ResponseI} from '../../../Models/response.interface';
import {ListaClientesI} from '../../../Models/listaclientes.interface';
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';
import { listaCuentasI } from 'src/app/Models/listacuentas.interface';

@Component({
  selector: 'app-nueva-cuenta',
  templateUrl: './nueva-cuenta.component.html',
  styleUrls: ['./nueva-cuenta.component.css']
})
export class NuevaCuentaComponent implements OnInit {

  response:listaCuentasI | undefined;
  clienteid: any | undefined;
  editorform = new FormGroup({
    tipo: new FormControl('')
  });
  constructor(private activeroute: ActivatedRoute, private router:Router, private api:ApiService) { }

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
        this.router.navigate(['ListaCuentas',this.clienteid])
      })
  }
}
