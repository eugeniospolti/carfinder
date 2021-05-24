import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { CreateCarRequest } from "./CreateCarRequest";

export class CreateCarUseCase {

    constructor( private carRepository: ICarRepository ) {
    }

    async execute(input: CreateCarRequest): Promise<Car> {
        const newCar = new Car(input);
        return this.carRepository.save(newCar);
    }
}