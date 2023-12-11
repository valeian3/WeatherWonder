export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface IWeather {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
  };
  uv: number;
}

export interface IWeatherCondition {
  text: string;
  icon: string;
}

export interface IWeatherHour {
  temp_c: number;
  temp_f: number;
  condition: IWeatherCondition;
  uv: number;
}

export interface IWeatherDay {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  totalsnow_cm: number;
  condition: IWeatherCondition;
  uv: number;
}

export interface IForecastDay {
  date: string;
  day: IWeatherDay;
  astro: Record<string, never>; // You can define the properties inside if needed
  hour: IWeatherHour[];
}

export interface IWeatherForecast {
  forecastday: IForecastDay[];
}

export interface WeatherStateProps {
  isFetchingWeatherData: boolean;
  searchLocation: string;
  location: ILocation;
  current: IWeather;
  forecast: IWeatherForecast;
}
