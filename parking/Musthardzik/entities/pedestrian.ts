import Entityable from "../interface/entity.interface";

export default class Pedestrian implements Entityable {
    private name: string = "";

    constructor(name: string) {
      this.name = name;
    }
    
    mayGetIn(): boolean {
        return true;
    }
    shouldPay(): boolean {
        return false;
    }
    identification(): string {
        return this.name;
    }
    fee(): number {
        return 0;
    }
}