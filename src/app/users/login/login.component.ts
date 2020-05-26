import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvengersService } from 'src/app/shared/avengers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private myService: AvengersService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'loginData': new FormGroup({
        'username': new FormControl('ranvijay', Validators.required),
        'password': new FormControl(null, Validators.required)
      })
    })
  }
  onLogin() {
    console.log();
    // this.loginForm.reset();
    this.myService.loginForm(this.loginForm.value.loginData).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        console.log(apiResponse);
        this.router.navigate(['animation']);
      }
      if (apiResponse.status === 201) {
        console.log(apiResponse);
      }
    })
  }

}
