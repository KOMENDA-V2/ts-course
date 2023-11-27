import Entityable from './interfaces/entity.interface'
import Log from './log'
import { ParkingLot } from './parking-lot'
import QueueGenerator from './queue-generator'

let queue: Entityable[] = []
const parking: ParkingLot = new ParkingLot()

Log.info("There's " + parking.countCars() + ' cars in the parking lot')
Log.info()

let givenHours = [8, 12, 22]

for (let hour = 6; hour <= 28; hour++) {
	if (givenHours.includes(hour)) {
		queue.push(...QueueGenerator.Generate())
	}

	if (hour >= 23 || hour <= 8) {
		parking.releaseAllVehicles()

		for (let entity of queue) {
			console.log(`[${hour}:00] - ${entity.identify()} has driven home due to closed parking 😴😴.`)
		}

		queue = []

		continue
	}

	for (let minute = 0; minute < 60; minute++) {
		const oneOrZero = Math.round(Math.random())

		if ((oneOrZero === 0 && queue.length) || (oneOrZero === 1 && parking.getEntitiesOnProperty() === 0)) {
			const entity = queue.shift()

			if (entity) {
				if (parking.checkIfCanEnter(entity, hour)) {
					parking.letIn(entity, formatHour(hour, minute))
				} else {
					Log.info(`${formatHour(hour, minute)} - ${entity.identify()} wasnt let in. 🤣`)
				}
			}
		} else {
			parking.releaseVehicle(formatHour(hour, minute))
		}
	}
}

Log.info()
if (parking.countCars() > 1) {
	Log.info('There are ' + parking.countCars() + ' cars in the parking lot.')
} else if (parking.countCars() <= 1) {
	Log.info("There's " + parking.countCars() + ' cars in the parking lot.')
}

console.log('\x1b[33m%s\x1b[0m', `Parking attendant collected: ${parking.getSumOfBank()}`)

function formatHour(hour: number, minute: number): string {
	const formattedHour = hour < 10 ? `0${hour}` : hour
	const formattedMinute = minute < 10 ? `0${minute}` : minute

	return `[${formattedHour}:${formattedMinute}]`
}
