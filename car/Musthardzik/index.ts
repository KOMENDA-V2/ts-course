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
    if (this.fuelLevel > 1 && this.isRunning === false) {
      this.isRunning = true;
      alert("Engine has been turned on.")
    } else if (this.fuelLevel === 0) {
      alert("Fuel tank is empty. Check fuel level.")
   } else if (this.isRunning === true) {
      alert("Engine is already on.")
   } else {
      alert("Something is wrong. Engine can't be turned on. Check fuel and fluids status, or visit local mechanic.")
    }
  }
	
  stopCar() {
    if(this.isRunning === true) {
      this.isRunning = false;
      alert("Engine has been turned off.")
    } else {
      alert("Engine is already off.")
    }
  }
  
  fuelStatus() {
  
  }
  
  getProperties() {
    alert("Brand: " + this.brand + "\nModel: " + this.model + "\nVersion: " + this.version + "\nYear: " + this.year + "\nTurned On: " + this.isRunning + "\nFuel Status: " + this.fuelLevel)
  }
}
let sportCar = new Car("Alfa Romeo", "147", "1.6 T.S Distinctive", 2007, false, 60)
let propert = false
while (!propert) {
let input = prompt("Click to proceed!\n 1.Start engine\n 2.Stop engine\n 3.Check fuel level\n 4.Check car properties")
  switch (input) {
    case "1":
      sportCar.startCar();
      break;
    case "2":
      sportCar.stopCar();
      break;
    case "3":
      sportCar.fuelStatus();
      break;
    case "4":
      sportCar.getProperties();
      break;
    default:
      propert = true;
      break;
  }
}