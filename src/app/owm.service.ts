import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OWMService {

  apiKey: string = '';
  url: string =  '';

  constructor(
    private _http: HttpClient
  ) {}

  async getCurrentWeather(): Promise<any> {
    const response = await this._http.get(this.url).toPromise();
    return response;
  }
}
