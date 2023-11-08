const MAX_FUEL_TANK_CAPACITY = 60
class Car {

  constructor(
    private brand: string,
    private model: string,
    private version: string,
    private year: number,
    private isRunning: boolean,
    private fuelLevel: number
  ) {}

  startCar() {
    if (this.fuelLevel >= 1 && !this.isRunning) {
      this.isRunning = true;
      alert("Engine has been turned on.")
    } else if (this.fuelLevel === 0) {
      alert("Fuel tank is empty. Check fuel level.")
    } else if (this.isRunning) {
      alert("Engine is already on.")
    } else {
      alert("Something is wrong. Engine can't be turned on. Check fuel and fluids status, or visit local mechanic.")
    }
  }

  stopCar() {
    if (this.isRunning) {
      this.isRunning = false;
      alert("Engine has been turned off.")
    } else {
      alert("Engine is already off.")
    }
  }

  addFuel() {
    if (this.fuelLevel === MAX_FUEL_TANK_CAPACITY) {
      alert("Fuel tank is fully filled")
    } else if (this.fuelLevel < MAX_FUEL_TANK_CAPACITY && !this.isRunning) {
      this.fuelLevel += 10
      alert("Refueling in progress. Please wait. \nFuel in tank: " + this.fuelLevel)
    } else {
      alert("Engine is working. Turn off to proceed.")
    }

  }

  getProperties() {
    alert("Brand: " + this.brand + "\nModel: " + this.model + "\nVersion: " + this.version + "\nYear: " + this.year + "\nTurned On: " + this.isRunning + "\nFuel Status: " + this.fuelLevel)
  }
}
let sportCar = new Car("Alfa Romeo", "147", "1.6 T.S Distinctive", 2007, false, 1)
let propert = false
while (!propert) {
  let input = prompt("Click to proceed!\n 1.Start engine\n 2.Stop engine\n 3.Pour fuel into tank\n 4.Check car properties")
  switch (input) {
    case "1":
      sportCar.startCar();
      break;
    case "2":
      sportCar.stopCar();
      break;
    case "3":
      sportCar.addFuel();
      break;
    case "4":
      sportCar.getProperties();
      break;
    default:
      propert = true;
      break;
  }
}
