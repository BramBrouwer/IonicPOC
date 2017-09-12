export class Characteristic {
    
    service: number;
    characteristic: string;
    properties: string[];
    descriptors: JSON;

    constructor(service:number,characteristic:string,properties:string[]){
        this.service = service;
        this.characteristic = characteristic;
        this.properties = properties;
    }
}