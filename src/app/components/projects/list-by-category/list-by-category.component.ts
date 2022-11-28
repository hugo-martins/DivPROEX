import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styleUrls: ['./list-by-category.component.css']
})
export class ListByCategoryComponent implements OnInit, OnChanges{
  @Input() category: any;
  public projetos: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      this.http.get(`http://localhost:3000/projetos?categoria_id=${this.category.id}`).subscribe(data => {
      this.projetos = data;
      console.log(data);
    })

    console.log(this.projetos);

  }

  fetchProjects(){
    console.log("entrou");

    this.http.get("http://localhost:3000/categorias").subscribe(data => {
      this.projetos = data;
      console.log(data);

    })

  }
  goToProjectRecister(){
    this.router.navigate(['/project-register']);
    console.log("Teste de registro de projeto")
  }

}
