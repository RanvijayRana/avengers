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
import { AddAvengersComponent } from './super-hero/add-avengers/add-avengers.component';


const appRoutes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'animation', component: AnimationComponent, pathMatch: 'full' },
  { path: 'addAvenger', component: AddAvengersComponent, pathMatch: 'full' },
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
    AddAvengersComponent,
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
