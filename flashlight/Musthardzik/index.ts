class Flashlight {
  isOn: boolean;
  batteriesCount: number;
  bulbCount: number;

  constructor(isOn: boolean, batteriesCount: number, bulbCount: number) {
    this.isOn = isOn,
      this.batteriesCount = batteriesCount,
      this.bulbCount = bulbCount
  }
  addBattery() {
    if (this.isOn === false) {
      this.batteriesCount++
      alert("Loading batteries, please wait...")
      alert("Battery has been loaded.")
    } else {
      alert("Turn off your flashlight to proceed.")
    }
  }

  addBulb() {
		    if (this.isOn === false) {
      this.bulbCount++
      alert("Changing bulb, please wait...")
      alert("Bulb has been changed.")
    } else {
      alert("Turn off your flashlight to proceed.")
    }
  }

  turnOn() {
    if (this.isOn === false && this.batteriesCount > 0) {
      this.isOn = true;
      alert("Flashlight has been turned on.")
      let simulate = setInterval(() => {
      	if(this.batteriesCount <= 0) {
        	this.turnOff();
          clearInterval(simulate)
        }
        this.batteriesCount--
        alert("sdasd")
      },
        3000);
    } else {
      alert("Flashlight has no batteries loaded.")
    }
  }

  turnOff() {
    if (this.isOn === false) {
      alert("Flashlight has not been turned on.")
    } else {
      this.isOn = false;
      alert("Flashlight has been turned off.")
    }
  }
}
let militaryLight = new Flashlight(false, 1, 1)

let condition = false
while (!condition) {
  let choice = prompt("Co chcesz zrobić?\n 1.Włączy latarkę \n 2.Wyłączy latarkę \n 3.Zmieni baterię\n\n\nStatus latarki: " + militaryLight.isOn + "\nIlość baterii: " + militaryLight.batteriesCount + "\nIlość żarówek: " + militaryLight.bulbCount)
  switch (choice) {
    case "1":
      militaryLight.turnOn();
      break;
    case "2":
      militaryLight.turnOff();
      break;
    case "3":
      militaryLight.addBattery();
      break;
    default:
      condition = true;
      break;
  }
}
