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
      "nome": "Pensamento Computacional"
    },
    {
      "id": 2,
      "nome": "Matemática"
    },
	    {
      "id": 3,
      "nome": "Inovação e Tecnologia"
    },    {
      "id": 4,
      "nome": "Arte e Cultura"
    },    {
      "id": 5,
      "nome": "Educação"
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
