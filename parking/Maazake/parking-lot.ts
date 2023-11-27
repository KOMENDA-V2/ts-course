import { Bicycle } from './entities/bicycle'
import { Car } from './entities/car'
import { PrivilegedCar } from './entities/privileged-cars'
import Entityable from './interfaces/entity.interface'
import Log from './log'
import QueueGenerator from './queue-generator'

class ParkingLot {
	private entitiesOnProperty: Entityable[] = []
	private carsOnProperty: number = 0
	private bikesOnProperty: number = 0
	private readonly carsParkingLimit: number = 100
	private readonly bicyclesParkingLimit: number = 10
	private readonly blacklistedPlates: string[] = QueueGenerator.GetBlacklistedPlates(3000)

	private bank: number = 0
	checkIfCanEnter(entity: Entityable): boolean {
		if (entity instanceof Car && this.blacklistedPlates.includes(entity.getPlate())) {
			return false
		}
		 return entity.canEnter()
	}

	letIn(entity: Entityable, hour: string): void {
		this.entitiesOnProperty.push(entity)

		if (entity instanceof Car) {
			if (this.carsOnProperty < this.carsParkingLimit) {
				if (!(entity instanceof PrivilegedCar)) {
					this.carsOnProperty++
				}

				if (entity.shouldPay()) {
					this.bank += entity.pay()
				}
			}
		}

		if (entity instanceof Bicycle) {
			if (this.bikesOnProperty >= this.bicyclesParkingLimit) {
				this.bank += entity.pay()
			}
			this.bikesOnProperty++
		}

		Log.info(`${hour} - ${entity.identify()} let in.`)
	}

	countCars(): number {
		return this.carsOnProperty
	}

	getSumOfBank(): number {
		return this.bank
	}
}

export { ParkingLot }
