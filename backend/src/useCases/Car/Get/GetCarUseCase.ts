import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { GetCarRequest } from "./GetCarRequest";

export class GetCarUseCase {

    constructor( private carRepository: ICarRepository ) {
    }

    async execute(input: GetCarRequest): Promise<Car>  {
        return this.carRepository.get(input.id);
    }
}