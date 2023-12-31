import { Log } from './Log'

export class Dice {
	constructor(private sides: number) {}
	roll(): number {
		const result = Math.floor(Math.random() * this.sides) + 1
		Log.info(`
		Dice roll: ${result}`)
		return result
	}
}
