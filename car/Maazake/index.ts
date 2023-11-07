class Car {
	constructor(
		public brand: string = 'Toyota',
		public model: string = 'Camry',
		public year: number = 2022,
		public isRunning: boolean = false,
		public fuelLevel: number = 0
	) {}
	startCar() {
		if (this.isRunning === false && this.fuelLevel > 0) {
			this.isRunning = true
			console.log('Włączono samochód')
		} else if (this.isRunning === true) {
			console.log('Samochód jest już włączony')
		} else {
			console.log('Brak paliwa')
		}
	}

	stopCar() {
		if (this.isRunning === true) {
			this.isRunning = false
			console.log('Wyłączono samochód')
		} else {
			console.log('Samochód jest już wyłączony')
		}
	}

	addFuel(amount: number) {
		this.fuelLevel += amount
		console.log(`Dodano ${this.fuelLevel} paliwa`)
	}
}

const toyotaC = new Car()

toyotaC.addFuel(10)
toyotaC.startCar()
// toyotaC.stopCar()

function driveCar(distance: number) {
	if (toyotaC.isRunning === true && toyotaC.fuelLevel > 0) {
		const lKm = distance / 2
		if (toyotaC.fuelLevel >= lKm) {
			toyotaC.fuelLevel -= lKm
			console.log(`Samochód przejechał ${distance}km i zostało mu ${toyotaC.fuelLevel} paliwa`)
		} else {
			console.log('Nie ma wystarczająco paliwa')
		}
	} else {
		console.log('Najpierw włącz samochód lub dolej paliwa żeby gdzieś jechać')
	}
}

driveCar(10)
