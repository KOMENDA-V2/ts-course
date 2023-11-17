import { Log } from "./log";
import { Board } from "./board";
import { PlayerGenerator } from "./playerGenerator";

let players = PlayerGenerator.generate();
export const board = new Board(50, players, 100, 12);
try {
  while (true) {
    board.performTurn();
  }
} catch (ex) {
  if (board.winner) {
    Log.info(`${board.winner.name} won`);
  }
}
