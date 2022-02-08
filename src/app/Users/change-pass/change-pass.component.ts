import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/Security/models/user.dto';
import { HttpConfigInterceptor } from 'src/app/Shared/http-config-interceptor';
import { ResponseI } from 'src/app/Shared/Models/response.interface';
import { AlertasService } from 'src/app/Shared/Services/alertas/alertas.service';
import { ApiService } from 'src/app/Shared/Services/api/api.service';
import { GlobalService } from 'src/app/Shared/Services/global.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  response:ResponseI<UserDto> | undefined;
  userForm = new FormGroup({
    nombre: new FormControl(this.globalService.user.firstName),
    apellido: new FormControl(''),
    userName: new FormControl(this.globalService.user.userName),
    actualPass: new FormControl(''),
    newPass: new FormControl(''),
    confirmNewPass: new FormControl('')
  });
  constructor(private router:Router, 
    private api:ApiService,
    private alertas:AlertasService,
    private interceptor:HttpConfigInterceptor,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    if(this.globalService.user.jwt==null)
    {
      this.router.navigate(['login'])
    }
  }

  validarDatos()
  {
    if(this.userForm.controls['newPass'].value == this.userForm.controls['confirmNewPass'].value && this.userForm.controls['newPass'].value != "")
    {
      let user: UserDto = new UserDto
      user.userName = this.userForm.controls['userName'].value
      user.password = this.userForm.controls['actualPass'].value
      this.api.postLogin(user).subscribe(data =>{
        if(data.success)
        {
          this.globalService.user = data.data
          user.password = this.userForm.controls['newPass'].value
          this.api.patchChagePass(user).subscribe(data=>
            {
              if(data.success)
              {
                console.log(data)
                this.alertas.showSucces('Contrasela actualizada','Contraseña actualizada')
                this.router.navigate(['home'])
              }
              else
              {
                this.alertas.shiwWarning(data.message,'Algo asalió mal')
              }
            })
        }
        else
        {
          this.alertas.shiwWarning('Contraseña actual incorrecta','Clave invalida')
        }
      })
    }
    else
    {
      this.alertas.shiwWarning('La nueva contraseña y su confirmacion no coinciden o están vacias','No se pudo cambiar la clave')
    }
  }
}
