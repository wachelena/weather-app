export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export class Condition  {
  constructor(
    public text: string,
    public icon: string,
    public code: number
  ) {}
}
