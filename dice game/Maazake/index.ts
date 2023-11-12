import { Log } from './Log'
import { Pawn } from './Pawn'
import { Board } from './Board'

const board = new Board(30, 3, 10) //(maxPosition, dice sides, turns)
board.pawns.push(new Pawn('Luke Skywalker'))
board.pawns.push(new Pawn('Darth Vader'))
board.pawns.push(new Pawn('Anakin Skywalker'))
board.pawns.push(new Pawn('Luke Skywalker'))
board.pawns.push(new Pawn('Leisa Organa'))
board.pawns.push(new Pawn('Obi-wan Kenobi'))
board.pawns.push(new Pawn('Han Solo'))
board.pawns.push(new Pawn('Chewbacca'))
board.pawns.push(new Pawn('Owen Lars'))
board.pawns.push(new Pawn('Beru Lars'))
board.addPlayers()

try {
	while (true) {
		board.performTurn()
	}
} catch (ex) {
	if (board.winner) {
		Log.info(`${board.winner.name} won`)
	}
}
