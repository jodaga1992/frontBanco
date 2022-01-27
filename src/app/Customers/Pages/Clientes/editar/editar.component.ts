import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../Shared/Services/api/api.service'
import {ResponseI} from '../../../../Shared/Models/response.interface';
import {ListaClientesI} from '../../../../Shared/Models/listaclientes.interface';
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';
import {AlertasService} from '../../../../Shared/Services/alertas/alertas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  response:ResponseI<ListaClientesI> | undefined;
  responsePut:ResponseI<ListaClientesI> | undefined;
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


  constructor(private activeroute: ActivatedRoute, private router:Router, private api:ApiService,private alertas:AlertasService) { }

  ngOnInit(): void {
    let clienteId = this.activeroute.snapshot.paramMap.get('id');
    this.api.getClienteId(clienteId).subscribe(data =>{
      this.response = data;
      this.editorform.setValue({
        'id':this.response?.data.id,
        'tipoId':this.response?.data.tipoId,
        'nombre':this.response?.data.nombre,
        'apellido':this.response?.data.apellido,
        'correo':this.response?.data.correo,
        'fechaNac':this.response?.data.fechaNac,
        'fechaCre':this.response?.data.fechaCre,
        'estado':this.response?.data.estado
      });
    })
  }

  putForm(form:ListaClientesI)
  {
    this.api.actualizarCliente(form).subscribe(data =>{
      this.responsePut = data
      if(this.responsePut.success=true)
      {
        if(this.responsePut.codigo==0)
        {
          this.alertas.showSucces(this.responsePut.message,'Hecho')
        }
        else
        {
          this.alertas.shiwWarning(this.responsePut.message,'Transaccion no ejecutada')
        }
      }
      else
      {
        this.alertas.showError(this.responsePut.message,'Error')
      }
      this.router.navigate(['ListaCuentas',this.responsePut.data.id]);
    })
  }

}
