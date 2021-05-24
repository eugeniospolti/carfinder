import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import { GetAllCarRequest } from "./GetAllCarRequest";
import { MultiResult } from '../../../common';

export class GetAllCarUseCase {

    constructor(private carRepository: ICarRepository ) {
    }

    async execute(input: GetAllCarRequest): Promise<MultiResult<Car>>  {
        
        const data = await this.carRepository.getAll(input);
        const totalCount = await this.carRepository.getCount(input);
        return { data, totalCount } ;
    }
}