import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent{

  public auth: boolean = true;

  constructor(public authService : AuthService) { }

  login(userName:string,password:string){
    
    console.log(userName);
    console.log(password);
    this.authService.login(userName,password);
  }
  logout(){
    this.authService.logout();
  }

  showSession(){
    return this.authService.showSession();
  }

}
