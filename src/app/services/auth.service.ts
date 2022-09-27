import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //token
  public auth : boolean = false;
  
  constructor() { }

  login(userName:string,password:string){
    this.auth = true;
    localStorage.setItem('auth',this.auth.toString());
    localStorage.setItem('userName',userName.toString());
    localStorage.setItem('password',password.toString());
  }

  logout(){
    this.auth = false;
    localStorage.clear();
  }
   
  showSession(){
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true')
    return this.auth;
  }

  /*getToken(u,c){
    if(u == ''){
      token = 'afafds'

    }
  }*/
    
}
