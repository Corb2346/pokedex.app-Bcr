import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    /*const TOKEN : string = 'poke token';

    console.log(TOKEN);
    

    if(TOKEN == ''){

      return next.handle(request);   
    }
    
    const HEADER_REQUEST : HttpRequest<any> = request.clone({
      headers : request.headers.set('Authorization',TOKEN)
    })*/

    const USERNAME :string = localStorage.getItem('username')?.toString() ?? '';
    const PASSWORD :string = localStorage.getItem('password')?.toString() ?? '';


    const TOKEN : string = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');
    console.log(TOKEN);
    
    const HEADER_REQUEST : HttpRequest<any> = request.clone({
      headers : request.headers.set('Authorization', `Basic ${TOKEN}`)
    })

    console.log(HEADER_REQUEST);
    
    return next.handle(HEADER_REQUEST);
  }
}
