import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";

export class CreateCarController {
    constructor(private createCarUseCase: CreateCarUseCase ) {
    }

    async handle( request: Request, response: Response  ): Promise<Response> {

        const { maker, model_name, year, color, monthlyPrice, availableDate } = request.body;

        try {    
            const car = await this.createCarUseCase.execute({ maker, model_name, year, color, monthlyPrice, availableDate });
            return response.status(201).send(car);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error' });
        }
    } 
}