import { Log } from './Log'
// import { Board } from './Board'

export class Dice {
  private sides: number;
	constructor(sides: number) {
    this.sides = sides
  }
	roll(): number {
		const result = Math.floor(Math.random() * this.sides) + 1
		Log.info(`Dice roll: ${result}`)
		return result
	}
}
