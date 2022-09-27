import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  response : any;
  constructor(public http : HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const URL = 'https://postman-echo.com/basic-auth';
    this.response = this.http.get(URL).subscribe( response => {
      console.log(response);
      return response;
    })
  }

}
