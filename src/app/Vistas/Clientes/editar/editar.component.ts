import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../Services/api/api.service'
import {ResponseI} from '../../../Models/response.interface';
import {ListaClientesI} from '../../../Models/listaclientes.interface';
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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
    let clienteId = this.activeroute.snapshot.paramMap.get('id');
    this.api.getClienteId(clienteId).subscribe(data =>{
      this.response = data.data;
      this.editorform.setValue({
        'id':this.response?.id,
        'tipoId':this.response?.tipoId,
        'nombre':this.response?.nombre,
        'apellido':this.response?.apellido,
        'correo':this.response?.correo,
        'fechaNac':this.response?.fechaNac,
        'fechaCre':this.response?.fechaCre,
        'estado':this.response?.estado
      });
    })
  }

  putForm(form:ListaClientesI)
  {
    this.api.actualizarCliente(form).subscribe(data =>{
      console.log(data)
    })
  }

}
