import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EndPoint } from './end-point';
import { UserDto } from '../models/user.dto';
import { ResponseI } from 'src/app/Shared/Models/response.interface';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    resource = '/users';
    url = EndPoint.URL + this.resource;

    constructor(private http: HttpClient) {
    }

    get(): Observable<ResponseI<UserDto[]>> {
        return this.http.get<ResponseI<UserDto[]>>(this.url);
    }

    save(users: UserDto[]): Observable<ResponseI<UserDto[]>> {
        return this.http.post<ResponseI<UserDto[]>>(this.url, users);
    }

    update(users: UserDto[]): Observable<ResponseI<UserDto[]>> {
        return this.http.put<ResponseI<UserDto[]>>(this.url, users);
    }

    delete(userName: string): Observable<ResponseI<string>> {
        return this.http.delete<ResponseI<string>>(this.url + '/' + userName);
    }

    login(user: UserDto): Observable<ResponseI<UserDto>> {
        return this.http.post<ResponseI<UserDto>>(this.url + '/auth', user);
    }

  }