// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface Beacon {
    name: string;
    id: string;
    advertising: number[];
    rssi: number;
}