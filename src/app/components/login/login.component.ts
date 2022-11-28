import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  @Output() logged = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void{
    this.loginForm = (this.fb.group({
      'username': new FormControl(''),
      'password': new FormControl('')
    }));
  }

  public onSubmit(): void {
    console.log(this.loginForm.value);
    this.login(this.loginForm);
    this.logged.emit(true)

  }


  login(credentials: any){
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Basic ' + window.btoa('dougras:123')
    //   })
    // };
    // console.log("entrou");
    // console.log(httpOptions);

    // this.http.post("http://localhost:8080/user", this.loginForm.value, httpOptions).subscribe(data => {
    //   console.log(data);
    // })
    this.logged.emit(true)


  }


}
