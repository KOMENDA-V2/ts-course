import { Log } from './Log'

export class Pawn {
	position: number
	push: any

	constructor(public name: string) {
		this.name = name
		this.position = 0
		//   Log.info(`${name} joined the game.`);
	}
}
