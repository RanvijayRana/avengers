import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnimationComponent } from './animation/animation.component';
import { SuperHeroComponent } from './super-hero/super-hero.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { AvengersService } from './shared/avengers.service';


const appRoutes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'animation', component: AnimationComponent },
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: '**', component: SignupComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimationComponent,
    SuperHeroComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AvengersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
