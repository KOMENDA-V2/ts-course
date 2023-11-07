class Flashlight {
	constructor(
		public isOn: boolean = false,
		public batteriesCount: number = 3,
		public maxBulbCount: number = 1,
		public bulbCount: number = 5
	) {}
	addBattery() {
		if (this.isOn === false && this.batteriesCount > 0) {
			this.batteriesCount--
			alert('Operacja się powiodła')
		} else if (this.isOn === true && this.batteriesCount > 0) {
			alert('Latarka jest włączona')
		} else if (this.isOn === false && this.batteriesCount <= 0) {
			alert('Brak baterii')
		}
	}
	turnOn() {
		if (this.batteriesCount > 0) {
			this.isOn = true
			alert('Latarka została pomyślnie włączona')
		} else {
			alert('Nie udało się włączyć latarki, brak baterii')
		}
	}
	turnOff() {
		{
			this.isOn = false
			alert('Latarka została wyłączona')
		}
	}
	getStatus() {
		alert(
			`Latarka jest ${this.isOn ? 'włączona' : 'wyłączona'}, ma ${this.batteriesCount} dostępnych baterii i ${
				this.maxBulbCount === 1 ? 'ma żarówkę' : 'nie ma żarówki'
			} w sobie`
		)
	}
	addBulb() {
		if (this.isOn === false && this.bulbCount > this.maxBulbCount) {
			this.bulbCount--
			this.maxBulbCount++
			alert('Dodano nową żarówkę do latarki.')
		} else if (this.isOn === false && this.maxBulbCount >= this.bulbCount) {
			alert('Nie można dodać żarówki (jest już żarówka lub żadnej nie masz)')
		} else if (this.isOn === true) {
			alert('Najpierw wyłącz latarkę aby dodać żarówkę')
		}
	}
	removeBulb() {
		if (this.isOn === false && this.maxBulbCount > 0) {
			this.maxBulbCount--
			alert('Pomyślnie usunięto żarówkę z latarki')
		} else if (this.isOn === true) {
			alert('Najpierw wyłącz latarkę aby usunąć żarówkę')
		}
	}
	checkBulbs() {
		alert(`Zostało ci ${this.bulbCount} żarówek`)
	}
}

let clearingInterval: number | undefined

function simulate(flashlight: Flashlight): void {
	clearingInterval = setInterval(() => {
		if (flashlight.batteriesCount > 0) {
			flashlight.addBattery()
			flashlight.getStatus()
		}
	}, 3000)
}

const flashlight = new Flashlight()
// simulate(flashlight)

try {
	while (flashlight.batteriesCount > 0) {
		simulate(flashlight)
		let choice = prompt(
			'1 wymienia baterię, \n2 włącza latarkę, \n3 wyłącza latarkę, \n4 dodaje żarówkę, \n5 wyciąga żarówkę, \n6 sprawdza ile zostało żarówek, \n7 status latarki'
		)
		if (choice === '1') {
			flashlight.addBattery()
		} else if (choice === '2') {
			flashlight.turnOn()
		} else if (choice === '3') {
			flashlight.turnOff()
		} else if (choice === '4') {
			flashlight.addBulb()
		} else if (choice === '5') {
			flashlight.removeBulb()
		} else if (choice === '6') {
			flashlight.checkBulbs()
		} else if (choice === '7') {
			flashlight.getStatus()
		} else {
			throw new Error()
		}
	}
} catch (error: any) {
	console.log('Latarka ded')
} finally {
	clearInterval(clearingInterval)
}
