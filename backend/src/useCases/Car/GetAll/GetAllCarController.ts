import { Request, Response } from "express";
import { CAR_STATUS } from "../../../common/models/getAllParams";
import { GetAllCarUseCase } from "./GetAllCarUseCase";

export class GetAllCarController {
    constructor(private getAllCarUseCase: GetAllCarUseCase ) {
    }

    async handle( request: Request, response: Response  ): Promise<Response> {
    
        try {

            const input = { 
                search: request.query.search as string || '', 
                limit: +(request.query.limit as string) || 10,
                offset: +(request.query.offset as string) || 0,
                sort: request.query.sort as string || 'monthlyPrice',
                status: request.query.status as CAR_STATUS || CAR_STATUS.Available  
            };

            const cars = await this.getAllCarUseCase.execute(input);             

            if (cars) {
                return response.status(200).send(cars);
            }

            return response.status(404).send();

        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error' });
        }
    } 
}