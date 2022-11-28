import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'divulgaPROEX';
  public logged!: Boolean;
  public enter!: Boolean;

  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
  }

  isLogged(resposta: any){
    this.logged = resposta;
  }

  setLogged(){
    this.logged = true;
  }

  public setEntered(){
    this.enter = true
    this.router.navigate(['/home']);

  }

}
