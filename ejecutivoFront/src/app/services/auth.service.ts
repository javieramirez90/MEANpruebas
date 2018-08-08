import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Observable, Subject } from 'rxjs';
// import { map, take } from 'rxjs/operators';
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';
// import { environment } from '../../environments/environment';



// import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  domain = "http://localhost:8080"
  
  // domain = "/"
  authToken;
  user;
  options;
  

  constructor(
    private http: Http,
    // public jwtHelper: JwtHelperService
  ) { }

  createAuthenticationHeaders() {
    this.loadToken(); 
    
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken 
      })
    });
  }


  loadToken() {
    this.authToken = localStorage.getItem('token');;   
  }

  //REGISTER
  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).pipe(map(res => res.json()));
  }

  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).pipe(map(res => res.json()));
  }

  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/'+ email).pipe(map(res => res.json()));
  }
  

  //LOGIN
  login(user) {
    return this.http.post(this.domain + '/authentication/login/', user).pipe(map(res => res.json()));
  }

  logout() {
    this.authToken = null; 
    this.user = null;
    localStorage.clear(); 
  }
  
  storeUserData(token, user) {
    localStorage.setItem('token', token); 
    localStorage.setItem('user', JSON.stringify(user)); 
    this.authToken = token; 
    user = user;
  }

  getProfile() {
    this.createAuthenticationHeaders(); 
    return this.http.get(this.domain + '/authentication/profile', this.options).pipe(map(res => res.json()));
  }

  ngOnInit() {
    // console.log(this.jwtHelper.isTokenExpired()); // true or false
    }

  // Function to check if user is logged in
  loggedIn() {
    if(this.authToken === null){
      return false;
    } else {
      return true;
    }


    // this.jwtHelper.isTokenExpired(this.authToken);
  }
  

  //   const helper = new JwtHelperService();
  //   const isExpired = helper.isTokenExpired(localStorage.getItem('token'));
  //   console.log(isExpired)


  //   // this.jwtHelper.isTokenExpired(localStorage.getItem(this.authToken))
  //   // console.log(this.jwtHelper.isTokenExpired(localStorage.getItem(this.authToken)))
    
  // }
  

}
