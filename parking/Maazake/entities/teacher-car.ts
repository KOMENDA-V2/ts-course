import { Car } from './car'

export class TeacherCar extends Car {
	constructor(plate: string) {
		super(plate)
	}

	shouldPay(): boolean {
		return false
	}
}
