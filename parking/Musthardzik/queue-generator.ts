import Entityable from "./interface/entity.interface";
import Pedestrian from "./entities/pedestrian";
import Car from "./entities/car";
import TeacherCar from "./entities/teacher-car";
import Bicycle from "./entities/bicycle";
import Tank from "./entities/tank";

export default class QueueGenerator {
    private static readonly ANONYMOUS_PEDESTRIAN_LIST = 9
    private static readonly PEDESTRIAN_LIST = 9
    private static readonly CAR_LIST = 9
    private static readonly BICYCLE_LIST = 9
    private static readonly TEACHER_CAR_LIST = 9
    private static readonly EMERGENCY_CAR_LIST = 9
    private static readonly DELIVERY_CAR_LIST = 9
    private static readonly TANK_LIST = 9
    

    private static RandomizePlate(): string {
        return "DLX " + (Math.floor(Math.random() * 60000) + 10000);
    }
    
    
    private static RandomizeName(): string {
        const names: string[] = ["Mateusz", "Adam", "Maciek", "Kamil", "Tomasz", "Andrzej", "Paulina", "Julia", "Izabela", "Nikola", "Joanna", "Magdalena"];
        return names[Math.floor(Math.random() * names.length)];
    }
    
    
    public static Generate(): Entityable[] {
        const queue: Entityable[] = [];

        for (let i = 0; i <= QueueGenerator.ANONYMOUS_PEDESTRIAN_LIST; i++) {
            queue.push(new Pedestrian(QueueGenerator.RandomizeName()));
        }

        for (let i = 0; i <= QueueGenerator.PEDESTRIAN_LIST; i++) {
            queue.push(new Pedestrian(QueueGenerator.RandomizeName()));
        }

        for (let i = 0; i <= QueueGenerator.CAR_LIST; i++) {
            queue.push(new Car(QueueGenerator.RandomizePlate()));
        }

        for (let i = 0; i <= QueueGenerator.TEACHER_CAR_LIST; i++) {
            queue.push(new TeacherCar(QueueGenerator.RandomizePlate()));
        }

        for (let i = 0; i <= QueueGenerator.EMERGENCY_CAR_LIST; i++) {
            queue.push(new Car(QueueGenerator.RandomizePlate()));
        }

        for (let i = 0; i <= QueueGenerator.DELIVERY_CAR_LIST; i++) {
            queue.push(new Car(QueueGenerator.RandomizePlate()));
        }

        for (let i = 0; i <= QueueGenerator.BICYCLE_LIST; i++) {
            queue.push(new Bicycle());
        }

        for (let i = 0; i < QueueGenerator.TANK_LIST; i++) {
            queue.push(new Tank());
        }

        return queue;
    }
}