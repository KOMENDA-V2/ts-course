class Car {
	constructor(
		public brand: string,
		public model: string,
		public year: number,
		public isRunning: boolean = false,
		public fuelLevel: number = 0
	) {}
	startCar() {
		if (!this.isRunning && this.fuelLevel > 0) {
			this.isRunning = true
			console.log('Włączono samochód')
		} else if (this.isRunning === true) {
			console.log('Samochód jest już włączony')
		} else {
			console.log('Brak paliwa')
		}
	}

	stopCar() {
		if (this.isRunning) {
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

const toyotaC = new Car('Toyota', 'Camry', 2022)

toyotaC.addFuel(10)
toyotaC.startCar()
// toyotaC.stopCar()

function driveCar(distance: number, car: Car) {
	if (car.isRunning && car.fuelLevel > 0) {
		const lKm = distance / 2
		if (car.fuelLevel >= lKm) {
			car.fuelLevel -= lKm
			console.log(`${car.brand} ${car.model} przebył ${distance}km zostawiając ${car.fuelLevel}L paliwa w baku`)
		} else {
			console.log('Nie ma wystarczająco paliwa')
		}
	} else {
		console.log('Najpierw włącz samochód lub dolej paliwa żeby gdzieś jechać')
	}
}

driveCar(10, toyotaC)
