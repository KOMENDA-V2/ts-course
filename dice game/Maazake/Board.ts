import { Log } from './Log'
import { Dice } from './Dice'
import { Pawn } from './Pawn'
import { WinnerWasCalled } from './WinnerWasCalled'

export class Board {
	pawns: Pawn[]
	dice: Dice
	winner: Pawn | undefined
	turnsCounter: number

	constructor(private maxPosition: number, diceSides: number, private maxTurns: number) {
		this.turnsCounter = 0
		this.pawns = []
		this.dice = new Dice(diceSides)
	}

	performTurn(): void {
		this.turnsCounter++
		Log.info(`!--- Turn ${this.turnsCounter} ---!`)

		for (let i = 0; i < this.pawns.length; i++) {
			const rollResult = this.dice.roll()
			const pawn = this.pawns[i]
			pawn.position += rollResult

			Log.info(`${pawn.name} new position: ${pawn.position}`)

			if (pawn.position >= this.maxPosition) {
				this.winner = pawn
				throw new WinnerWasCalled()
			}
			if (this.turnsCounter > this.maxTurns) {
				Log.info(`Max turns was set to ${this.maxTurns}, there is no winner and game can no longer be continued.`);
				throw new WinnerWasCalled()
			}
		}
	}

	addPlayers() {
		const selectedPlayers: Pawn[] = []

		for (let i = 0; i < Math.floor(Math.random() * 8) + 3; i++) {
			const randomIndex = Math.floor(Math.random() * this.pawns.length)
			const selectedPlayer = this.pawns.splice(randomIndex, 1)[0]
			selectedPlayers.push(selectedPlayer)
			Log.info(`Player ${i + 1}: ${selectedPlayer.name} joined the game!`)
		}
		this.pawns = selectedPlayers
	}
}
