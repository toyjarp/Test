import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatchDataService {

  
  constructor(private http: HttpClient) {}

  featch(url:string) {
    return this.http.get("https://api.spacexdata.com/"+url);
  }
}

