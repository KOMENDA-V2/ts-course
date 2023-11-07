let MAX_BATTERY_COUNT = 3;
let MAX_BULB_COUNT = 1;
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
    if (this.batteriesCount === 1) {
      alert("Can't fit another battery in the socket.")
    } else if (this.isOn === false && MAX_BATTERY_COUNT > 0) {
      this.batteriesCount++
      MAX_BATTERY_COUNT--
      alert("Loading batteries, please wait...")
      alert("Battery has been loaded.")
    } else if (MAX_BATTERY_COUNT === 0) {
			alert ("There is no battery to change.")
    } else {
      alert("Turn off your flashlight to proceed.")
    }
  }

  removeBattery() {
    if (this.batteriesCount === 1) {
      this.batteriesCount--
      alert("Battery has been removed.")
    } else {
      alert("There is no battery to remove.")
    }
  }

  addBulb() {
    if (this.bulbCount === 1) {
      alert("Bulb socket is not clear.")
    } else if (this.isOn === false && MAX_BULB_COUNT > 0) {
      this.bulbCount++
      MAX_BULB_COUNT--
      alert("Changing bulb, please wait...")
      alert("Bulb has been changed.")
    } else if (MAX_BULB_COUNT === 0) {
			alert ("There is no bulb to change.")
    } else {
      alert("Turn off your flashlight to proceed.")
    }
  }

  removeBulb() {
    if (this.bulbCount === 1) {
      this.bulbCount--
      alert("Bulb has been removed from the socket.")
    } else {
      alert("There is no bulb to remove.")
    }
  }

  turnOn() {
    if (this.isOn === false && this.batteriesCount > 0) {
      this.isOn = true;
      alert("Flashlight has been turned on.")
      /* let simulate = setInterval(() => {
        if(this.batteriesCount <= 0) {
          this.turnOff();
          clearInterval(simulate)
        }
        this.batteriesCount--
        alert("sdasd")
      },
        3000); */
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
let militaryLight = new Flashlight(false, 0, 0)

let condition = false
while (!condition) {
  let choice = prompt("Click to proceed\n 1.Turn on \n 2.Turn off \n 3.Change battery \n 4.Remove battery \n 5.Change Bulb \n 6.Remove bulb\n\n\nFlashlight status: " + militaryLight.isOn + "\nBattery Status: " + militaryLight.batteriesCount + "\nBulb Status: " + militaryLight.bulbCount + "\nBattery Count: " + MAX_BATTERY_COUNT + "\nBulb Count: " + MAX_BULB_COUNT)
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
    case "4":
      militaryLight.removeBattery();
      break;
    case "5":
      militaryLight.addBulb();
      break;
    case "6":
      militaryLight.removeBulb();
      break;
    default:
      condition = true;
      break;
  }
}
