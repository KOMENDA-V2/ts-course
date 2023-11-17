import { Log } from "./log";
import { WinnerWasCalled } from "./winner";
import { Dice } from "./dice";
import { Pawn } from "./pawn";
import { board } from "./index";

export class Board {
    dice: Dice;
    winner: Pawn | undefined;
    turnsCounter: number;
  
    constructor(private endOfTurns: number, private pawns: Pawn[], private maxPosition: number) {
      this.turnsCounter = 0;
      this.dice = new Dice(12);
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