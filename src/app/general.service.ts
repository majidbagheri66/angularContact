import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
httpClient:HttpClient;
  constructor() { }

  getContentJSON() {
    return this.httpClient.get("assets/json/general.json");
  }
}
