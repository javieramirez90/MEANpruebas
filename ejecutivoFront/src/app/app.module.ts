import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { ProgramsComponent } from './components/programs/programs.component';

import { AuthGuard } from './guards/auth.guard';
import { ITAMComponent } from './components/itam/itam.component';
import { IBEROComponent } from './components/ibero/ibero.component';
import { FooterComponent } from './components/footer/footer.component';
// import { NotAuthGuard } from './guards/notAuth.guard';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({

  
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ProgramsComponent,
    ITAMComponent,
    IBEROComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080', 'localhost:4200'],
        blacklistedRoutes: []
      }
    })
  
  ],
  providers: [AuthService, AuthGuard, ], //NotAuthGuard
  bootstrap: [AppComponent]

  
})



export class AppModule { }
