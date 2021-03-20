import { DailyTemp } from "./daily-temp.model";

export class DailyData {
    date: string;
    maxtemp: number;
    mintemp: number;
    hourlyData: DailyTemp[];
    weatherIcon: string;
}