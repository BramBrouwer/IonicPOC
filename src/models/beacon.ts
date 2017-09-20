// User model based on the structure of github api at
// https://api.github.com/users/{username}

import { Characteristic } from "./characteristic";

export class Beacon {

    id: string;
    beacon_id: string;
    major: number;
    minor: number;
    description: string;
    title: string;
    image: string;    
    // constructor(name:string,id:string,advertising:number[],rssi:number,services: string[],characteristics: Characteristic[], descriptors: [{uuid:string}])
    // {
    //     this.name = name;
    //     this.id = id;
    //     this.advertising = advertising;
    //     this.rssi = rssi;
    //     this.services = services;
    //     this.characteristics = characteristics;
    //     this.descriptors = descriptors; 
    // }

}

