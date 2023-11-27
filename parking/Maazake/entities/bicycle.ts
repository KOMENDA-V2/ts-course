import Entityable from '../interfaces/entity.interface'

export class Bicycle implements Entityable {
	shouldPay(): boolean {
		return true
	}
	pay(): number {
		return 2
	}
	canEnter(): boolean {
		return true
	}

	identify(): string {
		return 'Unknown bicycle'
	}
}
