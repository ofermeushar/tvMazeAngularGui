import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

@Injectable()
export class AuthService {

  user: any;
  
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post('https://tv-maze-sever.herokuapp.com/users/register', user, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  autenticateUser(body:any) {
    return this.http.post('https://tv-maze-sever.herokuapp.com/users/login', body, {
      observe: 'body',
      withCredentials: true,//for cookie
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  logout() {
    this.user = null;

    return this.http.get('https://tv-maze-sever.herokuapp.com/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  getUser() {
   let res= this.http.get('https://tv-maze-sever.herokuapp.com/users/user',{
      observe: 'body',
      withCredentials: true,//for cookie
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

    res.subscribe(data=>{this.user=data;console.log(data);});
    return res;
  }

  isLogged() {
    return this.user ? true : false;
  }
}
