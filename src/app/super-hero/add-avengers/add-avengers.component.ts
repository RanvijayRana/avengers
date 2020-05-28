import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AvengersService } from '../../shared/avengers.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-avengers',
  templateUrl: './add-avengers.component.html',
  styleUrls: ['./add-avengers.component.css']
})
export class AddAvengersComponent implements OnInit {

  avenger: FormGroup;

  constructor(private myService: AvengersService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.avenger = new FormGroup({
      'avengerData': new FormGroup({
        'avengersName': new FormControl('Iron-Man', Validators.required),
        'charactersName': new FormControl('Tony Stark', Validators.required),
        'realName': new FormControl('Rober D. Jr.', Validators.required),
        'imageUrl': new FormControl(null, Validators.required),
        'movie': new FormControl(null, Validators.required),
        'power': new FormControl(null, Validators.required),
      })
    });
  }

  addAvenger() {
    this.myService.avengersSaveData(this.avenger.value.avengerData).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.toastr.success("New Avenger data saved");
        setTimeout(() => {
          this.router.navigate(['animation']);
        }, 1000);
      } else {
        this.toastr.error(`Error happend while saving data: - ${apiResponse.message}`);
      }
    })
  }

}
