import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'divulgaPROEX';
  selectedButton = ""
  public logged!: Boolean;
  public enter!: Boolean;

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

  public setEntered(){
    this.enter = true;
  }

}
