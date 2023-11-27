import { Bicycle } from './entities/bicycle'
import { Car } from './entities/car'
import Pedestrian from './entities/pedestrian'
import { PrivilegedCar } from './entities/privileged-cars'
import { Tank } from './entities/tank'
import { TeacherCar } from './entities/teacher-car'
import Entityable from './interfaces/entity.interface'

class QueueGenerator {
	private static readonly ANONYMOUS_PEDESTRIANS_COUNT: number = 0
	private static readonly PEDESTRIANS_COUNT: number = 0
	private static readonly CARS_COUNT: number = 100
	private static readonly TEACHER_CARS_COUNT: number = 0
	private static readonly BICYCLES_COUNT: number = 0
	private static readonly PRIVILEGED_COUNT: number = 5
	private static readonly TANK_COUNT: number = 5

	public static Generate(): Entityable[] {
		const queue: Entityable[] = []

		for (let i = 0; i < QueueGenerator.ANONYMOUS_PEDESTRIANS_COUNT; i++) {
			queue.push(new Pedestrian())
		}

		for (let i = 0; i < QueueGenerator.PEDESTRIANS_COUNT; i++) {
			queue.push(new Pedestrian(QueueGenerator.GetRandomName()))
		}

		for (let i = 0; i < QueueGenerator.CARS_COUNT; i++) {
			queue.push(new Car(QueueGenerator.GetRandomPlateNumber()))
		}

		for (let i = 0; i < QueueGenerator.TEACHER_CARS_COUNT; i++) {
			queue.push(new TeacherCar(QueueGenerator.GetRandomPlateNumber()))
		}

		for (let i = 0; i < QueueGenerator.BICYCLES_COUNT; i++) {
			queue.push(new Bicycle())
		}

		for (let i = 0; i < QueueGenerator.PRIVILEGED_COUNT; i++) {
			queue.push(new PrivilegedCar(QueueGenerator.GetRandomPlateNumber()))
		}

		for (let i = 0; i < QueueGenerator.TANK_COUNT; i++) {
			queue.push(new Tank())
		}

		// Shuffle the queue (Fisher-Yates shuffle)
		for (let i = queue.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[queue[i], queue[j]] = [queue[j], queue[i]]
		}

		return queue
	}

	private static GetRandomPlateNumber(): string {
		return 'DLX ' + (Math.floor(Math.random() * 80000) + 10000)
	}

	static GetBlacklistedPlates(plates: number): string[] {
		let blacklistedPlates: string[] = []
		for (let i = 0; i < plates; i++) {
			blacklistedPlates.push(this.GetRandomPlateNumber())
		}
		return blacklistedPlates
	}

	private static GetRandomName(): string {
		const names: string[] = ['John', 'Jack', 'James', 'George', 'Joe', 'Jim']
		return names[Math.floor(Math.random() * names.length)]
	}
}

export default QueueGenerator
