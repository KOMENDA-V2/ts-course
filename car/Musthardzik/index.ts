const MAX_FUEL_TANK_CAPACITY = 60
class Car {

  constructor(
    public brand: string,
    public model: string,
    public version: string,
    public year: number,
    public isRunning: boolean,
    public fuelLevel: number,
    public combustion: number,
  ) {}

  startCar() {
    if (this.fuelLevel >= 1 && !this.isRunning) {
      this.isRunning = true;
      console.log("Engine has been turned on.")
    } else if (this.fuelLevel === 0) {
      console.log("Fuel tank is empty. Check fuel level.")
    } else if (this.isRunning) {
      console.log("Engine is already on.")
    } else {
      console.log("Something is wrong. Engine can't be turned on. Check fuel and fluids status, or visit local mechani			c.")
    }
  }

  stopCar() {
    if (this.isRunning) {
      this.isRunning = false;
      console.log("Engine has been turned off.")
    } else {
      console.log("Engine is already off.")
    }
  }

  addFuel(fuel: number) {
    if (this.fuelLevel === MAX_FUEL_TANK_CAPACITY) {
      console.log("Fuel tank is fully filled")
    } else if (this.fuelLevel < MAX_FUEL_TANK_CAPACITY && !this.isRunning) {
      this.fuelLevel += fuel
      console.log("Refueling in progress. Please wait. \nFuel in tank: " + this.fuelLevel)
    } else {
      console.log("Engine is working. Turn off to proceed.")
    }

  }

  getProperties() {
    console.log("Brand: " + this.brand + "\nModel: " + this.model + "\nVersion: " + this.version + "\nYear: " +
      this.year + "\nTurned On: " + this.isRunning + "\nFuel Status: " + this.fuelLevel + "\nCombustion Status: " +
      this.combustion + " l/100km")
  }
}

let sportCar = new Car("Alfa Romeo", "147", "1.6 T.S Distinctive", 2007, false, 12, 12)



function driveCar(distance: number, car: Car) {
  if (car.isRunning && car.fuelLevel >= 1) {
    let fuelUsed = parseFloat((distance / car.combustion).toFixed(2));
    if (car.fuelLevel >= fuelUsed) {
      console.log(`${car.brand} ${car.model} has traveled ${distance} km, using ${fuelUsed} liters of fuel.`)
      car.fuelLevel = car.fuelLevel - fuelUsed;
    } else {
      console.log(`${car.brand} ${car.model} has no fuel in tank. Visit local gas station to pump some.`)
    }

  } else {
    console.log("Something is wrong. Engine can't be turned on. Check fuel and fluids status, or visit local mechanic.")
  }
}
sportCar.addFuel(10);
sportCar.startCar();
driveCar(100, sportCar)