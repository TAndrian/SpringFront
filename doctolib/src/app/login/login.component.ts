import { RestApiService } from './../rest-api.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!:String;
  password!:String;

  visible! : boolean;
  constructor(private service:RestApiService , router:RouterModule) { }

  ngOnInit(): void {
  }

  login(){
   let resp =  this.service.login(this.email, this.password);
   resp.subscribe(data => {
    console.log(data);
   });
  }

}
