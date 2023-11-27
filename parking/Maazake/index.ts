import Entityable from './interfaces/entity.interface'
import Log from './log'
import { ParkingLot } from './parking-lot'
import QueueGenerator from './queue-generator'

let queue: Entityable[] = []
const parking: ParkingLot = new ParkingLot()

Log.info("There's " + parking.countCars() + ' cars in the parking lot')
Log.info()

let givenHours = [8, 12, 18]

for (let hour = 6; hour <= 23; hour++) {
	if (givenHours.includes(hour)) {
		queue.push(...QueueGenerator.Generate())
	}

	for (let minute = 0; minute < 60; minute++) {
		const entity = queue.shift()

		if (entity) {
			if (parking.checkIfCanEnter(entity)) {
				parking.letIn(entity, formatHour(hour, minute))
			} else {
				Log.info(`${formatHour(hour, minute)} - ${entity.identify()} wasnt let in. 🤣`)
			}
		}
	}

}

Log.info()
if (parking.countCars() > 1) {
	Log.info('There are ' + parking.countCars() + ' cars in the parking lot')
} else if (parking.countCars() <= 1) {
	Log.info("There's " + parking.countCars() + ' cars in the parking lot')
}

console.log(`Parking attendand collected: ${parking.getSumOfBank()}`)

function formatHour(hour: number, minute: number): string {
	const formattedHour = hour < 10 ? `0${hour}` : hour
	const formattedMinute = minute < 10 ? `0${minute}` : minute

	return `[${formattedHour}:${formattedMinute}]`
}
