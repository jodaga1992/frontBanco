import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../Shared/Services/api/api.service'
import {ListaClientesI} from '../../../../Shared/Models/listaclientes.interface';
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';
import {AlertasService} from '../../../../Shared/Services/alertas/alertas.service';
import { ResponseI } from 'src/app/Shared/Models/response.interface';
import { GlobalService } from 'src/app/Shared/Services/global.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  response:ResponseI<ListaClientesI> | undefined;
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

  constructor(private activeroute: ActivatedRoute, 
    private router:Router, 
    private api:ApiService, 
    private alertas:AlertasService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    if(this.globalService.user.jwt==null)
    {
      this.router.navigate(['login'])
    }
  }

  postForm(form:ListaClientesI)
  {
    this.api.guardarCliente(form).subscribe(data =>
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
      this.router.navigate(['home']);
      })
  }

}
