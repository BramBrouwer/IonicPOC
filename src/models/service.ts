export class Service {
    
    service: string;
    characteristic: string;
    properties: string[];

    constructor(service: string, characteristic: string, properties: string[]){
        this.service = service;
        this.characteristic = characteristic;
        this.properties = properties;
    }
}



