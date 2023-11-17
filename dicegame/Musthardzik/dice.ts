import { Log } from "./log"

export class Dice {
    
    constructor(private diceWallsNumber: number) {}
  
    roll() {
      const result = Math.floor(Math.random() * this.diceWallsNumber) + 1;
      Log.info(`Dice roll: ${result}`);
      return result;
    }
  }