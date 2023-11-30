import Entityable from "../interface/entity.interface"

export default class Bicycle implements Entityable{
    
    mayGetIn(): boolean {
        return true;
    }
    shouldPay(): boolean {
        return false;
    }
    identification(): string {
        return "Bicycle";
    }
    fee(): number {
        return 0;
    }
}