import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service'
import {ListaClientesI} from '../../../Models/listaclientes.interface';
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  response:ListaClientesI | undefined;
  editorform = new FormGroup({
    id: new FormControl(''),
    tipoId: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    correo: new FormControl(''),
    fechaNac: new FormControl(''),
    fechaCre: new FormControl(''),
    estado: new FormControl('')
  });

  constructor(private activeroute: ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
  }

  postForm(form:ListaClientesI)
  {
    this.api.guardarCliente(form).subscribe(data =>
      {
        console.log(data)
      })
  }

}
