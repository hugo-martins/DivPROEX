import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public selectedButton: any = "";

  @Output() newItemEvent = new EventEmitter<string>();

  public categorias = [
    {
      "id": 1,
      "nome": "Comunicação"
    },
    {
      "id": 2,
      "nome": "Cultura"
    },
    {
      "id": 3,
      "nome": "Direitos Humanos e Justiça"
    },    {
      "id": 4,
      "nome": "Educação"
    },    {
      "id": 5,
      "nome": "Meio Ambiente"
    },    {
      "id": 6,
      "nome": "Saúde"
    },    {
      "id": 7,
      "nome": "Tecnologia e Produção"
    },    {
      "id": 8,
      "nome": "Trabalho"
    }


  ]

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  sendSelectedButton(){
    this.newItemEvent.emit(this.selectedButton)
  }


  public setButtonSelect(selected: any): void {
    this.selectedButton = selected;
  }





}
