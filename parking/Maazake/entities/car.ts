import Entityable from '../interfaces/entity.interface'

export class Car implements Entityable {
	private plate: string

	constructor(plate: string) {
		this.plate = plate
	}
	shouldPay(): boolean {
		return true
	}
	pay(): number {
		return 5
	}

	canEnter(): boolean {
		return true
	}

	getPlate(): string {
		return this.plate
	}

	identify(): string {
		return 'Car with plate number ' + this.plate
	}
}
