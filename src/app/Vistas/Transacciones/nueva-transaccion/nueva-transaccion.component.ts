import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service'
import {ListaClientesI} from '../../../Models/listaclientes.interface';
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';
import { TransaccionI } from 'src/app/Models/transaccion.interface';

@Component({
  selector: 'app-nueva-transaccion',
  templateUrl: './nueva-transaccion.component.html',
  styleUrls: ['./nueva-transaccion.component.css']
})
export class NuevaTransaccionComponent implements OnInit {

  response:TransaccionI | undefined;
  editorform = new FormGroup({
    tipo: new FormControl(''),
    monto: new FormControl(''),
    cuentaOrigen: new FormControl(''),
    cuentaDestino: new FormControl('')
  });

  constructor(private activeroute: ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.editorform.setValue({
      'tipo':"Transferencia"
    })
  }

}
