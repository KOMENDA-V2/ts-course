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
