import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }

  public login(email:String, password:String){
    const headers= new HttpHeaders({Authorization: 'Basic' + btoa(email+":"+password)});
    return this.http.get("http://localhost:8080/user/login", {headers, responseType:'text' as 'json'});
  }

}
