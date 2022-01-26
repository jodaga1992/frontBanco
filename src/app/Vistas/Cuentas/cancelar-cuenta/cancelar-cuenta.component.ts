import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ResponseI} from '../../../Models/response.interface';
import {ApiService} from '../../../Services/api/api.service';

@Component({
  selector: 'app-cancelar-cuenta',
  templateUrl: './cancelar-cuenta.component.html',
  styleUrls: ['./cancelar-cuenta.component.css']
})
export class CancelarCuentaComponent implements OnInit {

  response:ResponseI | undefined;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let numeroCuenta = this.activerouter.snapshot.paramMap.get('numeroCuenta');
    this.api.putCancelarCuenta(numeroCuenta).subscribe(data => {
      console.log(data);
      this.router.navigate(['home']);
    });
  }

}
