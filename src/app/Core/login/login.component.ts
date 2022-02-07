import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResponseI } from 'src/app/Shared/Models/response.interface';
import {AlertasService} from '../../Shared/Services/alertas/alertas.service'
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validator, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from '../../Shared/Services/api/api.service'
import { UserDto } from 'src/app/Security/models/user.dto';
import { HttpConfigInterceptor } from 'src/app/Shared/http-config-interceptor';
import { GlobalService } from 'src/app/Shared/Services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() login: EventEmitter<UserDto> = new EventEmitter();
  response:ResponseI<UserDto> | undefined;
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private activeroute: ActivatedRoute, 
    private router:Router, 
    private api:ApiService,
    private alertas:AlertasService,
    private interceptor:HttpConfigInterceptor,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    if(this.globalService.user != null)
    {
      //this.router.navigate(['home']);
    }
  }

  loginPost(form:UserDto)
  {
    this.api.postLogin(form).subscribe(data =>{
      if(data.success)
      {
        this.globalService.user = data.data
        this.router.navigate(['home']);
      }
      else
      {
        this.alertas.shiwWarning(data.message,'Login Fallido')
      }
    })
  }

}
