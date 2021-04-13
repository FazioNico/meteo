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
    return {
      temp: meteoData.main.temp,
      temp_min: meteoData.main.temp_min,
      temp_max: meteoData.main.temp_max,
      humidity: meteoData.main.humidity,
      name: meteoData.name,
      imageUrl: `http://openweathermap.org/img/wn/${meteoData.weather[0].icon}@2x.png` 
    };
  }
}
