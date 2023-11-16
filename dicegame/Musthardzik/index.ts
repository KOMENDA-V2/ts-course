import { Log } from "./log";
import { Board } from "./board";
import { Pawn } from "./pawn";
import { Dice } from "./dice";
import { PlayerGenerator } from "./playerGenerator";

let players = PlayerGenerator.generate();
const board = new Board(10, players);
try {
  while (true) {
    board.performTurn();
  }
} catch (ex) {
  if (board.winner) {
    Log.info(`${board.winner.name} won`);
  }
}
