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
		console.log(`Dodano ${this.fuelLevel} paliwa`);
	}
}

const toyotaC = new Car ()

toyotaC.addFuel(2)
toyotaC.startCar()
toyotaC.stopCar()