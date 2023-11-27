
import Entityable from '../interfaces/entity.interface'

export class Tank implements Entityable {

	identify(): string {
		return 'Tank'
	}
	canEnter(): boolean {
		return false
	}
	pay(): number {
		return 0
	}

	shouldPay(): boolean {
		return false
	}
}
