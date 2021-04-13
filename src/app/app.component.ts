import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Meteo';
  meteoData: {
    temp?: any;
    temp_min?: any;
    temp_max?: any;
    humidity?: any;
    name?: any;
    imageUrl?: string;
};

  constructor(
    private _meteo: MeteoService
  ){}

  async ngOnInit() {
    this.meteoData = await this._meteo.getMeteo();
  }
}
