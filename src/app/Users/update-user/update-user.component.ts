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
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  response:ResponseI<UserDto> | undefined;
  userForm = new FormGroup({
    firstName: new FormControl(this.globalService.user.firstName),
    lastName: new FormControl(this.globalService.user.lastName),
    userName: new FormControl(this.globalService.user.userName),
    password: new FormControl('')
  });

  constructor(
    private router:Router, 
    private api:ApiService,
    private alertas:AlertasService,
    private interceptor:HttpConfigInterceptor,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    if(this.globalService.user.jwt==null)
    {
      this.router.navigate(['login'])
    }
  }

  updateUser(form: UserDto)
  {
    this.api.postLogin(form).subscribe(data =>{
      if(data.success)
      {
        this.globalService.user = data.data
        this.api.putUser(form).subscribe(data =>{
          if(data.success)
          {
            this.globalService.user.firstName = data.data.firstName
            this.globalService.user.lastName = data.data.lastName
            this.alertas.showSucces(data.message,'Usuario actualizado')
            this.router.navigate(['home'])
          }
          else
          {
            this.alertas.shiwWarning(data.message, 'Algo salió mal')
          }
        })
      }
      else
      {
        this.alertas.shiwWarning(data.message,'Algo salió mal')
      }
    })
  }

}
