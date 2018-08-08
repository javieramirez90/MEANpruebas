import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ProgramService {
  
  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }


createAuthenticationHeaders() {
  this.authService.loadToken(); 
  this.options = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json',
      'authorization': this.authService.authToken 
    })
  });
}

getAllPrograms() {
  this.createAuthenticationHeaders(); 
  return this.http.get(this.domain + 'programs/allPrograms', this.options).pipe(map(res => res.json()));
}

getSingleProgram(id) {
  this.createAuthenticationHeaders(); 
  return this.http.get(this.domain + 'programs/singleProgram/' + id, this.options).pipe(map(res => res.json()));
}

deleteProgram(id) {
  this.createAuthenticationHeaders(); // Create headers
  return this.http.delete(this.domain + 'programs/deleteProgram/' + id, this.options).pipe(map(res => res.json()));
}

}