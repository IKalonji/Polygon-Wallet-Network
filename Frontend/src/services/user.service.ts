import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:string = ""

  constructor() { }

  setUser(user: string){
    this.user = user
  }

  getUser(): string{
    return this.user
  }

}
