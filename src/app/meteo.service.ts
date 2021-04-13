import { Injectable } from "@angular/core";
import { GeoService } from "./geo.service";
import { OWMService } from "./owm.service";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  meteoData: any;

  constructor(
    private _geoService: GeoService,
    private _apiServie: OWMService
  ) {

  }

  async getMeteo() {
    const pos = await this._geoService.getPosition();
    const meteoData = await this._apiServie.getCurrentWeather(pos);
    this.meteoData = meteoData;
  }
}