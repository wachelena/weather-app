import { Condition } from './condition.model';

export interface Current {
  temp_c: number;
  condition: Condition;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  vis_km: number;
  uv: number;
  gust_kph: number;
}

export class Current  {
  constructor(
    public temp_c: number,
    public condition: Condition,
    public wind_kph: number,
    public wind_degree: number,
    public wind_dir: string,
    public pressure_mb: number,
    public precip_mm: number,
    public humidity: number,
    public cloud: number,
    public feelslike_c: number,
    public vis_km: number,
    public uv: number,
    public gust_kph: number
  ) {}
}
