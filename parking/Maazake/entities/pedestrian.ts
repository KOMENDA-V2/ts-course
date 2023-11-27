import Entityable from "../interfaces/entity.interface";

export class Pedestrian implements Entityable {
  private name: string = "";

  constructor(name: string = "") {
    this.name = name;
  }
  shouldPay(): boolean {
    throw new Error("Method not implemented.");
  }
  pay(): number {
    throw new Error("Method not implemented.");
  }

  canEnter(): boolean {
    return true;
  }

  identify(): string {
    return this.name !== "" ? this.name : "Unknown pedestrian";
  }
}

export default Pedestrian;
