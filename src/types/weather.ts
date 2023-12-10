interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface IWeather {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
  };
  uv: number;
}

export interface WeatherStateProps {
  fetchWeatherDataPending: string;
  searchLocation: string;
  location: ILocation;
  current: IWeather;
  forecast: any;
}
