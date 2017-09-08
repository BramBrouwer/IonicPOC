// User model based on the structure of github api at
// https://api.github.com/users/{username}
export class Beacon {

    name: string;
    id: string;
    advertising: number[];
    rssi: number;

    constructor(name:string,id:string,advertising:number[],rssi:number)
    {
        this.name = name;
        this.id = id;
        this.advertising = advertising;
        this.rssi = rssi;
    }

}