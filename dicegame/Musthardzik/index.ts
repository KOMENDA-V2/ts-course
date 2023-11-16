class WinnerWasCalled extends Error {}

class Log {
  static info(message: string = "") {
    console.log(message);
  }
}

class Dice {
  roll() {
    const result = Math.floor(Math.random() * 6) + 1;
    Log.info(`Dice roll: ${result}`);
    return result;
  }
}

class Pawn {
  position: number;

  constructor(public name: string) {
    this.name = name;
    this.position = 0;
    Log.info(`${name} joined the game.`);
  }
}

class Board {
  private maxPosition: number = 100;
  pawns: Pawn[];
  dice: Dice;
  winner: Pawn | undefined;
  turnsCounter: number;

  constructor() {
    this.turnsCounter = 0;
    this.pawns = [];
    this.dice = new Dice();
  }

  performTurn(): void {
    this.turnsCounter++;
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


const board = new Board();
board.dice = new Dice();
board.pawns.push(new Pawn("Luke Skywalker"));
board.pawns.push(new Pawn("Darth Vader"));

try {
  while (true) {
    board.performTurn();
  }
} catch (ex) {
  if (board.winner) {
    Log.info(`${board.winner.name} won`);
  }
}
