import { Component, OnInit } from '@angular/core';
declare var google: any;
import { FeatchDataService } from '../Services/featch-data.service';
import { location } from '../Model/locdetails'
@Component({
  selector: 'app-launchpad-loc',
  templateUrl: './launchpad-loc.component.html',
  styleUrls: ['./launchpad-loc.component.css']
})
export class LaunchpadLocComponent implements OnInit {

  constructor(private data: FeatchDataService) { }

  options: any;
  overlays: any[] = [];
  locations: location[] = [];
  latitude: number[] = [];
  longitude: number[] = [];
  ngOnInit(): void {

    this.data.featch('v3/landpads').subscribe(res => {
      this.locations = <location[]>res;
      console.log(this.locations)
      this.locations.forEach(x =>
        this.latitude.push(x.location.latitude))
      console.log(this.latitude)
      this.locations.forEach(x =>
        this.longitude.push(x.location.longitude))
      console.log(this.longitude)
      this.overlays = this.latitude.map((lat, index) => 
      new google.maps.Circle({ center: { lat: lat, lng: this.longitude[index] }, fillColor: 'Red', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
        )
    })
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };
  }
}

