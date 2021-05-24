import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { UpdateCarRequest } from "./UpdateCarRequest";

export class UpdateCarUseCase {

    constructor( private carRepository: ICarRepository ) {
    }

    async execute(input: UpdateCarRequest): Promise<Car> {
        const updatedCar = new Car(input,input.id);
        return this.carRepository.save(updatedCar);
    }
}