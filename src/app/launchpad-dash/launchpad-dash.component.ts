import { Component, OnInit } from '@angular/core';
import {FeatchDataService} from '../Services/featch-data.service';
import { Launches} from '../Model/launches'
@Component({
  selector: 'app-launchpad-dash',
  templateUrl: './launchpad-dash.component.html',
  styleUrls: ['./launchpad-dash.component.css']
})
export class LaunchpadDashComponent implements OnInit {

  launches:Launches[]=[]
  AllLaunches:number=0;
  UpComingLaunches:number=0;
  PastLaunches:number=0;
  constructor(private data : FeatchDataService) { }

  ngOnInit(): void {
    this.getdataAll();
  }
getdataAll()
{
this.data.featch('v3/launches').subscribe(res=>{
this.launches =<Launches[]>res
// console.log(this.launches)
this.AllLaunches=(this.launches.length)
this.UpComingLaunches=(this.launches.filter(x => x.upcoming===true).length)
this.PastLaunches=(this.launches.filter(x => x.upcoming!==true).length)
})
}
}
