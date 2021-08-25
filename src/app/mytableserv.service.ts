import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytableservService {

  constructor(private http:HttpClient) { }

  public TableReports(){
    return this.http.get("https://api.npoint.io/a932ddf389ffb9e64816")
    
  }
}
