export interface Accessory {
    text: string;
    icon: string;
}

export class Accessory {
    constructor(
        public text: string,
        public icon: string
    ) { }
}