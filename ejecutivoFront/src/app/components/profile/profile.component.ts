import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../../services/auth.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username;
  email;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private flashMessagesService: FlashMessagesService,

  ) { }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('Cierre de sesión exitoso', {cssClass: 'alert-info' });
    this.router.navigate['/'];
    
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.email = profile.user.email;  
    });
  }

}
