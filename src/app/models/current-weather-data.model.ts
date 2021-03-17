import { Location } from './location.model';
import { Current } from './current.model';
export interface CurrentWeatherData {
location: Location;
current: Current;
}

export class CurrentWeatherData  {
  constructor(
    public location: Location,
    public current: Current
  ) {}
}
