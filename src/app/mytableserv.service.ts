import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytableservService {

  constructor(private http:HttpClient) { }

  public TableReports(){
    return this.http.get("https://random-data-api.com/api/name/random_name?size=10")
  }
}
