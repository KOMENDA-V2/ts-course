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