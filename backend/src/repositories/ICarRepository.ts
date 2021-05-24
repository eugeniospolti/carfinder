import { Car } from "../entities/Car";
import { IGetAllParams } from '../common/models/getAllParams';

export interface ICarRepository {
    get(id:string): Promise<Car>;
    save(car: Car): Promise<Car>; 
    getAll(params: IGetAllParams): Promise<Car[]>; 
    getCount(params: IGetAllParams): Promise<number>;
}