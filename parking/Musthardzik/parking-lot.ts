import  Car  from "./entities/car";
import Tank from "./entities/tank";
import Entityable from "./interface/entity.interface";
import Log from "./log";
import  Bicycle  from "./entities/bicycle";
import QueueGenerator from "./queue-generator";

export default class ParkingLot {
    private entitiesOnProperty: Entityable[] = [];
    private carsOnProperty: number = 0;
    private bikesOnProperty: number = 0;

    private getLog(entity: Entityable, message: string) {
        Log.info(entity.identification() + message);
    }
    
    checkIfCanGetIn(entity: Entityable) {
        return entity.mayGetIn();
    }

    letIn(entity: Entityable) {
        this.entitiesOnProperty.push(entity);
        this.getLog(entity, " got pushed in.")

        if (entity instanceof Car) {
            this.carsOnProperty++;
        }
        
        if (entity instanceof Bicycle){
            this.bikesOnProperty++;
        }
    }

    countCars(): number {
        return this.carsOnProperty;
    }

    countBicycle(): number {
        return this.bikesOnProperty;
    }


}
