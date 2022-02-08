import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserDto } from 'src/app/Security/models/user.dto';
import { GlobalService } from 'src/app/Shared/Services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private globalService: GlobalService) { }

  ngOnInit(): void {
  }

toHome()
{
  this.router.navigate(['home']);
}
chagePass()
{
  this.router.navigate(['changePassword']);
}

updateUser()
{
  this.router.navigate(['updateUser']);
}

closeSesion()
{
  this.globalService.user = new UserDto
  this.router.navigate(['login'])
}

}
