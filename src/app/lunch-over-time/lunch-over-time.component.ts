import { Component, OnInit } from '@angular/core';
import {FeatchDataService} from '../Services/featch-data.service';
import { Launches} from '../Model/launches'

@Component({
  selector: 'app-lunch-over-time',
  templateUrl: './lunch-over-time.component.html',
  styleUrls: ['./lunch-over-time.component.css']
})
export class LunchOverTimeComponent implements OnInit {

  constructor(private data : FeatchDataService) { }
  basicData: any;
  basicOptions: any;
  launches:Launches[]=[]
  years:number[]=[]
  count:number[]=[];
  ngOnInit(): void {
    this.data.featch('v3/launches').subscribe(res=>{
    this.launches =<Launches[]>res
    this.launches.forEach(x=>
      this.years.push(x.launch_year))
      const counts:any={}
      this.years.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
      this.years =[...new Set(this.years)]
      this.count=counts
      // console.log(counts)
      // console.log(this.years)
      // console.log(this.count)
      this.basicData = {
      labels: this.years,
      datasets: [
          {
              label: 'Launch Over time',
              backgroundColor: '#42A5F5',
              data: this.count
          },
          
      ]
  };
    })
    
  }

 
}

