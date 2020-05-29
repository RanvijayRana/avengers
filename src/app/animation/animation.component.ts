import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.css']
})
export class AnimationComponent {

    constructor(private toastr: ToastrService) { }

    showAvenger(avengerName) {
        console.log("event received");
        this.toastr.show(`Averger ${avengerName} Selected`);
    }
}