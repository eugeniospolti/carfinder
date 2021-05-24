import { Request, Response } from "express";
import { GetCarUseCase } from "./GetCarUseCase";

export class GetCarController {
    constructor(private getCarUseCase: GetCarUseCase ) {
    }

    async handle( request: Request, response: Response  ): Promise<Response> {
    
        try {
            const car = await this.getCarUseCase.execute({ 'id' : request.params.id });

            if (car) {
                return response.status(200).send(car);
            }

            return response.status(404).send();

        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error' });
        }
    } 
}