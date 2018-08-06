import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageClass;
  message;
  processing = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm(); // Create Login Form when component is constructed
  }

  // Function to create login form
  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required], // email field
      password: ['', Validators.required] // Password field
    });
  }

  // Function to disable form
  disableForm() {
    this.form.controls['email'].disable(); // Disable email field
    this.form.controls['password'].disable(); // Disable password field
  }

  // Function to enable form
  enableForm() {
    this.form.controls['email'].enable(); // Enable email field
    this.form.controls['password'].enable(); // Enable password field
  }

  // Functiont to submit form and login user
  onLoginSubmit() {
    this.processing = true; // Used to submit button while is being processed
    this.disableForm(); // Disable form while being process
    // Create user object from user's input
    const user = {
      email: this.form.get('email').value, // email input fieldx
      password: this.form.get('password').value // Password input field
    }

    
    //Login with the back
    this.authService.login(user).subscribe(data => {
       
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; 
        this.message = data.message; 
        this.processing = false; 
        this.enableForm(); 
      } else {
        this.messageClass = 'alert alert-success'; 
        this.message = data.message;
        this.authService.storeUserData(data.token, data.user);
        setTimeout(() => {
          this.router.navigate(['/dashboard']); 
        }, 1000);
      }
    });
  }

  ngOnInit() {
  }

}