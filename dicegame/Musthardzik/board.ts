import { Log } from "./log";
import { WinnerWasCalled } from "./winner";
import { Dice } from "./dice";
import { Pawn } from "./pawn";

export class Board {
    private maxPosition: number = 100;
    dice: Dice;
    winner: Pawn | undefined;
    turnsCounter: number;
  
    constructor(private endOfTurns: number, private pawns: Pawn[]) {
      this.turnsCounter = 0;
      this.dice = new Dice();
    }
  
    performTurn(): void {
      this.turnsCounter++;
      if (this.turnsCounter > this.endOfTurns) {
        Log.info(`${this.endOfTurns} turns has been achived. Game remains unfinished.`)
        throw new WinnerWasCalled();
      }
      Log.info(`Turn ${this.turnsCounter}`);
  
      for (let i = 0; i < this.pawns.length; i++) {
        const rollResult = this.dice.roll();
        const pawn = this.pawns[i];
        pawn.position += rollResult;
  
        Log.info(`${pawn.name} new position: ${pawn.position}`);
  
        if (pawn.position >= this.maxPosition) {
          this.winner = pawn;
          throw new WinnerWasCalled();
        }
      }
    }
  }