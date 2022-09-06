import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import {FeatchDataService} from '../Services/featch-data.service';
import { Launches} from '../Model/launches'

@Component({
  selector: 'app-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.css']
})
export class LaunchTimelineComponent implements OnInit {
  launches:Launches[]=[]
  events: any[]=[];
  flightname:string[]=[];
  launchDate:string[]=[];
  constructor(private data : FeatchDataService) { }

  ngOnInit(): void {
    this.data.featch('v3/launches').subscribe(res=>{
      this.launches =<Launches[]>res
      console.log(this.launches)
      this.launches.forEach(x=>
        this.flightname.push(x.mission_name))
        this.launches.forEach(x=>
          this.launchDate.push(x.launch_date_utc))
        console.log(this.flightname)
        console.log(this.launchDate)
        this.events = this.flightname.map((name, index) => {
          return {
            name: name,
            date: this.launchDate[index],
          }
        });
  })
}
}
