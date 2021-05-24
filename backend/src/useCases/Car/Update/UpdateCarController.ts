import { Request, Response } from "express";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

export class UpdateCarController {
    constructor(private updateCarUseCase: UpdateCarUseCase ) {

    }

    async handle( request: Request, response: Response  ): Promise<Response> {
        
        const id = request.params.id;
        const { maker, model, year, color, monthlyPrice, availableDate } = request.body;

        try {    
            const car = await this.updateCarUseCase.execute({ id, maker, model, year, color, monthlyPrice, availableDate });
            if (car) {
                return response.status(200).send(car);
            }

            return response.status(404).send();
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error' });
        }
    } 
}