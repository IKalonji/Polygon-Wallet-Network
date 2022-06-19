import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UAuth from '@uauth/js'
import { UserService } from 'src/services/user.service';


const uauth = new UAuth(
  {
    clientID: "a892174c-662d-46f2-9059-37e2a786da24",
    redirectUri: "https://polygon-network-visualizer.vercel.app/login"
  }
  )

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoggedIn:boolean=false

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("Show login");
    },
    3000);
  }

  async login(){
    try{
      const authorization = await uauth.loginWithPopup();
      console.log(authorization)
      this.userService.setUser(authorization.idToken.sub)
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
