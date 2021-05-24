import mongoose from "mongoose";
import { DateWithoutTime, DateAddMonth } from "../../../common/helpers";
import { IGetAllParams, CAR_STATUS } from "../../../common/models/getAllParams";
import { Car } from "../../../entities/Car";
import { ICarRepository } from "../../../repositories/ICarRepository";
import CarSchema, { ICar } from '../models/car.model';

export class CarRepository implements ICarRepository {

    private map(data: ICar): Car {         
        delete data._id;
        delete data.__v;
        const newData = new Car({ ...data },data.id); 
        return newData ;
    }

    private createQuery(params: IGetAllParams): any {
        
        let status = {};
        if (params.status && params.status === CAR_STATUS.Available)
        {
            const currentDate = DateWithoutTime(new Date());
            const availableDate = DateAddMonth(currentDate,3);
            status = { $and : [ { availableDate : { $gte: currentDate , $lt: availableDate  }}]}
        }

        return { $or: [
            { model_name: { $regex: `${params.search}`,$options: '-i'  } },
            { maker: { $regex: `${params.search}`, $options: '-i' } }],
            ...status };
    }
    
    async get(id: string): Promise<Car> {
        return CarSchema.findById(mongoose.Types.ObjectId(id)).lean()
            .then((data:ICar) => {
                return data ? this.map(data) : data; 
            });
    }

    async save(car: Car): Promise<Car> {
        return CarSchema.findByIdAndUpdate(mongoose.Types.ObjectId(car.id), 
            {...car},
            { new: true, upsert: true }).lean()
            .then((data: ICar) => {
                return this.map(data); 
            })
            .catch((error: Error) => {
                throw error;
            });
    }

    async getAll(params: IGetAllParams): Promise<Car[]> {
        return CarSchema.find(this.createQuery(params)).lean()
            .skip(params.offset*params.limit)
            .limit(params.limit)
            .sort(params.sort)
            .then((data:ICar[]) => {
                return data.map(car => this.map(car)); 
            });
    }

    async getCount(params: IGetAllParams): Promise<number> {
        return CarSchema.countDocuments(this.createQuery(params))
           .then((count:number) => {
                return count; 
        });
    }
}