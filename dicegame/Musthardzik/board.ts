import { Log } from "./log";
import { WinnerWasCalled } from "./winner";
import { Dice } from "./dice";
import { Pawn } from "./pawn";

export class Board {
    dice: Dice;
    winner: Pawn | undefined;
    turnsCounter: number;
  
    constructor(private endOfTurns: number, private pawns: Pawn[], private maxPosition: number, private diceSides: number) {
      this.turnsCounter = 0;
      this.dice = new Dice(diceSides);
    }

    performTurn(): void {
      this.turnsCounter++;
      if (this.turnsCounter > this.endOfTurns) {
        Log.info(`${this.endOfTurns} turns has been achived. Game remains unfinished.`)
        throw new WinnerWasCalled();
      }
      Log.info(`Turn ${this.turnsCounter}`);
  
      for (let i = 0; i < this.pawns.length; i++) {
        let rollResult = this.dice.roll();
        const pawn = this.pawns[i];
        pawn.position += rollResult;

        Log.info(`${pawn.name} new position: ${pawn.position}`);

        if (rollResult === this.diceSides && pawn.position % 7) {
          Log.info(`CRITICAL ROLL! ${pawn.name} hit ${this.diceSides} on his dice and got free throw!`)

          const freeDiceThrow = this.dice.roll();
          pawn.position += freeDiceThrow;
          Log.info(`${pawn.name} new position: ${pawn.position}`);
          
        } else if (pawn.position % 2 !== 0 && rollResult === 1) {
          const turningBackThrow = this.dice.roll();
          pawn.position -= turningBackThrow;
          Log.info(`${pawn.name} threw an odd number on dice. He goes back by ${turningBackThrow} positions`)
          Log.info(`${pawn.name} new position: ${pawn.position}`);
        }
        if (pawn.position >= this.maxPosition) {
          this.winner = pawn;
          throw new WinnerWasCalled();
        }
      }
      
    }
  }