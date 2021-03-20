export interface WeatherAlertType {
    weatherAlertTypeId: number; //id from alert type constants
    weatherAlertTypeName: string; //name of the city
}

export class WeatherAlertType  {
  constructor(
    public weatherAlertTypeId: number,
    public weatherAlertTypeName: string,
  ) {}
}

export class WeatherAlertTypes {
    weatherAlertTypes : WeatherAlertType[] = [
        {weatherAlertTypeId: 1, weatherAlertTypeName: 'Vjetar'},
        {weatherAlertTypeId: 2, weatherAlertTypeName: 'Snijeg/Led'},
        {weatherAlertTypeId: 3, weatherAlertTypeName: 'Grmljavinsko nevrijeme'},
        {weatherAlertTypeId: 4, weatherAlertTypeName: 'Magla'},
        {weatherAlertTypeId: 5, weatherAlertTypeName: 'Iznimno visoka temperatura'},
        {weatherAlertTypeId: 6, weatherAlertTypeName: 'Iznimno niska temperatura'},
        {weatherAlertTypeId: 7, weatherAlertTypeName: 'Obalni događaj'},
        {weatherAlertTypeId: 8, weatherAlertTypeName: 'Šumski požar'},
        {weatherAlertTypeId: 9, weatherAlertTypeName: 'Lavine'},
        {weatherAlertTypeId: 10, weatherAlertTypeName: 'Kiša'},
        {weatherAlertTypeId: 11, weatherAlertTypeName: 'Poplava'},
        {weatherAlertTypeId: 12, weatherAlertTypeName: 'Bujična poplava'}
    ];
}