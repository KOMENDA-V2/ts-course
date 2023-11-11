import {Log} from "./Log";

export class Dice {
    roll(): number {
      const result = Math.floor(Math.random() * 6) + 1;
      Log.info(`Dice roll: ${result}`);
      return result;
    }
  }