import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-register',
  templateUrl: './project-register.component.html',
  styleUrls: ['./project-register.component.css']
})
export class ProjectRegisterComponent implements OnInit {

  public projectRegisterForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  public createForm(): void{
    this.projectRegisterForm = (this.fb.group({
      'nameProject': new FormControl(''),
      'description': new FormControl(''),
      'contact': new FormControl(''),
    }));
  }

  public onSubmit(): void {
    console.log(this.projectRegisterForm.value);
    this.submit(this.projectRegisterForm);
  }

  submit(request: any){
    request = true;
  }

}
