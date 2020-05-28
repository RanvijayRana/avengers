import { Component, OnInit } from '@angular/core';
import { Avenger } from '../shared/avenger.model';
import { AvengersService } from '../shared/avengers.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {

  // superHero: Avenger[] = [
  //   new Avenger("Dr. Strange", "Dr. Stephen Strange", "Benedict Cumberbatch", "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg", ["Avengers: Endgame", "Avengers: Infinity War", "Thor: Raganork", "Doctor Strange"], ["Master of mystic arts", "Astral Projection", "Teleportation", "Eye of Agamotto", "Cloak of Levitation"]),

  //   new Avenger("Captain Marvel", "Carol Denvor", "Brie Larson", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg", ["Avengers: Endgame", "Avengers: Infinity War", "Captain Marvel"], ["Cosmic Blast"]),

  //   new Avenger("Thor", "Thor Odinson", "Chris Hemsworth", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_crd_01.jpg",
  //     ["Avengers: Endgame", "Avengers: Infinity War", "Thor: Raganork",], ["Summoning Mjolnir", "Flight", "God of Thunder", "Storm Breaker & The Bifrost"]),

  //   // new Avenger("Groot", "Groot", "Vin Diesel", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/024grt_com_crd_01.jpg", ["Avengers: Infinity War", "Guardian of Galaxy Vol. 2", "Guardian of Galaxy"], ["Strength", "Regeneration", "Light Spores"])
  // ];

  superHero = "";
  constructor(private myService: AvengersService, private toastr: ToastrService, private router: Router) { }


  ngOnInit() {
    this.myService.avengersData().subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.superHero = apiResponse.data;
        this.toastr.success("Data fetched from db for available avengers")
      } else if (apiResponse.status === 201) {
        this.toastr.warning("Initially no data fetched for Avengers");
      } else {
        this.toastr.error("error while retreiving the avengers data")
      }
    })
  }

  addAvenger() {
    this.router.navigate(['addAvenger']);
  }

}
