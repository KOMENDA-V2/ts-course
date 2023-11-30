import Entityable from "../interface/entity.interface"

export default class Car implements Entityable {
    private plate: string;
    
    constructor(plate: string){
        this.plate = plate;
    }
    
    mayGetIn(): boolean {
        return true;
    }
    shouldPay(): boolean {
        return true;
    }
    identification(): string {
        return "Unknown car with plate numbers " + this.plate;
    }
    fee(): number {
        return 9.99;
    }
    getRandmPlate(): string{
        return this.plate;
    }
}