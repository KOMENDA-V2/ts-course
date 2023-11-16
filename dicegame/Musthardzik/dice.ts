import { Log } from "./log"

export class Dice {
    roll() {
      const result = Math.floor(Math.random() * 6) + 1;
      Log.info(`Dice roll: ${result}`);
      return result;
    }
  }