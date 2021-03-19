export interface AirQuality {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    us_epa_index: number;
    gb_defra_index: number;
}

export class AirQuality  {
  constructor(
    public co: number,
    public no2: number,
    public o3: number,
    public so2: number,
    public pm2_5: number,
    public pm10: number,
    public us_epa_index: number,
    public gb_defra_index: number,
  ) {}
}
