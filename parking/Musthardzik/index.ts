import Entityable from "./interface/entity.interface";
import Log from "./log";
import  ParkingLot  from "./parking-lot";
import QueueGenerator from "./queue-generator";

let queue: Entityable[] = []
let privateParkingLot: ParkingLot = new ParkingLot();

Log.info("There was " + privateParkingLot.countCars() + " cars in the parking lot");
Log.info();

Log.info("There was " + privateParkingLot.countBicycle() + " bicycles in the parking lot");
Log.info();

queue.push(...QueueGenerator.Generate())

for (const entity of queue) {
    if (privateParkingLot.checkIfCanGetIn(entity)) {
        privateParkingLot.letIn(entity);
    }
}

Log.info(privateParkingLot.countCars() + " cars got in the parking lot");
Log.info();

Log.info(privateParkingLot.countBicycle() + " bicycles got in the parking lot");
Log.info();