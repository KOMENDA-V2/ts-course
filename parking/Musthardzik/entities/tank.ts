import Entityable from "../interface/entity.interface"

export default class Tank implements Entityable {
    
    mayGetIn(): boolean {
        return false;
    }
    shouldPay(): boolean {
        return false;
    }
    identification(): string {
        return "Unknown Machine";
    }
    fee(): number {
        return 0;
    }
    
}