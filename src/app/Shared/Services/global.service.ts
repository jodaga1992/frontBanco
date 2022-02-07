import { Injectable } from "@angular/core";
import { UserDto } from "src/app/Security/models/user.dto";

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    public user: UserDto = new UserDto();

    constructor() {

    }

}