import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ListaClientesI } from 'src/app/Shared/Models/listaclientes.interface';
import {ResponseI} from '../../../../Shared/Models/response.interface'
import {ApiService} from '../../../../Shared/Services/api/api.service'
import {AlertasService} from '../../../../Shared/Services/alertas/alertas.service';

@Component({
  selector: 'app-inactivar-cliente',
  templateUrl: './inactivar-cliente.component.html',
  styleUrls: ['./inactivar-cliente.component.css']
})
export class InactivarClienteComponent implements OnInit {

  response:ResponseI<ListaClientesI> | undefined;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService,private alertas:AlertasService) { }

  ngOnInit(): void {
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('id');
    this.api.putInactivarCliente(numeroCuenta).subscribe(data => {
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
