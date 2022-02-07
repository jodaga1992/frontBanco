import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/Security/models/user.dto';
import { HttpConfigInterceptor } from 'src/app/Shared/http-config-interceptor';
import { ResponseI } from 'src/app/Shared/Models/response.interface';
import { AlertasService } from 'src/app/Shared/Services/alertas/alertas.service';
import { ApiService } from 'src/app/Shared/Services/api/api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  response:ResponseI<UserDto> | undefined;
  userForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    confimPassword: new FormControl('')
  });

  constructor(private router:Router, 
    private api:ApiService,
    private alertas:AlertasService,
    private interceptor:HttpConfigInterceptor) { }

  ngOnInit(): void {

  }

  validarDatos()
  {
    if(this.userForm.controls['password'].value == this.userForm.controls['confimPassword'].value)
    {
      let user: UserDto = new UserDto();
      user.firstName = this.userForm.controls['nombre'].value
      user.lastName = this.userForm.controls['apellido'].value
      user.userName = this.userForm.controls['userName'].value
      user.password = this.userForm.controls['password'].value
      this.postUser(user)
    }
    else
    {
      this.alertas.shiwWarning('Las contraseñas no coinciden','No se pudo crear usuario')
    }
  }

  postUser(user: UserDto)
  {
    this.api.postUser(user).subscribe(data =>{
      if(data.success)
      {
        this.alertas.showSucces(data.message,'Usuario Creado')
        this.router.navigate(['login'])
      }
      else
      {
        this.alertas.shiwWarning(data.message,'No se pudo crear usuario')
      }
    })
  }

}
