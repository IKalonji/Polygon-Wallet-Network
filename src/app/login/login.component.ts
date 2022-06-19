import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UAuth from '@uauth/js'


const uauth = new UAuth(
  {
    clientID: "403b33b6-7f56-44bb-9504-900181c9fb6b",
    redirectUri: "http://localhost:4200/login"
  }
  )

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showButton:boolean=false;
  userLoggedIn:boolean=false

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("Show login");
      this.showButton = true;
    },
    3000);
  }

  async login(){
    try{
      const authorization = await uauth.loginWithPopup();
      console.log(authorization)
      this.userLoggedIn = true;
    }catch (error){
      this.userLoggedIn = true;
      console.error(error);
    }
  }

  getStarted(){
    this.router.navigateByUrl("/query-input")
  }

}
