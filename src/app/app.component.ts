import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'divulgaPROEX';
  selectedButton = ""
  public logged: Boolean;

  constructor() {

  }
  ngOnInit(): void {
  }

  isLogged(resposta: any){
    this.logged = resposta;
  }
  
  sendSelectedButton(resposta: any){
    this.selectedButton = resposta;
  }

  setLogged(){
    this.logged = true;
  }
}







