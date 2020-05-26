import { Component, OnInit, ViewChild, OnDestroy, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { AvengersService } from '../../shared/avengers.service'
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  private signupSubscription: Subscription;
  @ViewChild('signupData') formData: NgForm;

  constructor(private router: Router, private myService: AvengersService,
    private toastr: ToastrService, vcr: ViewContainerRef) { }

  ngOnInit() { }

  onSubmit() {
    this.signupSubscription = this.myService.signupForm(this.formData.value.userData).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.toastr.success("singup completed successfully");
        setTimeout(() => {
          this.formData.reset();
          this.router.navigate(['/login']);
        }, 2000)
      }
      else {
        this.toastr.error(`Unable to signup due to ${apiResponse.message}`);
      }
    });

  }

  onReset() {
    let reset = confirm("Are you sure, you want to reset the form data");
    if (reset == true) {
      this.formData.reset();
    }
  }

  ngOnDestroy() {
  }

}
