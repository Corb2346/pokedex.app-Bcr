import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<any> {

  constructor(private http: HttpClient){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const pokemonId: number = route.params['id'];
    const url = `https://pokeapi.co/api/v2/pokemon/${ pokemonId }`;
    return this.http.get(url);
  }
}
