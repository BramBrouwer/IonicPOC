export class Characteristic {
    
    service: number;
    characteristic: string;
    properties: string[];
    descriptors: [{ uuid: string }]

    constructor(service:number,characteristic:string,properties:string[],descriptors:[{uuid:string}]){
        this.service = service;
        this.characteristic = characteristic;
        this.properties = properties;
        this.descriptors = descriptors;
    }
}