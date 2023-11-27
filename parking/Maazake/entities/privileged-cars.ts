//na wzor teachercars
import { Car } from './car'

export class PrivilegedCar extends Car {
	constructor(plate: string) {
		super(plate)
	}

	shouldPay(): boolean {
		return false
	}

    	identify(): string {
		return 'Privilieged Car with plate number ' + this.getPlate()
	}
    
}