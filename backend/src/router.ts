import { Router, Request, Response } from "express";
import { validationResult } from 'express-validator';
import { createCarController } from "./useCases/Car/Create";
import { getCarController } from "./useCases/Car/Get";
import { getAllCarController } from "./useCases/Car/GetAll";
import { updateCarController} from "./useCases/Car/Update";
import { createCarValidator, idCarValidator, updateCarValidator } from "./useCases/Car/Validators";

const router = Router()

router.post('/api/cars', createCarValidator, (request: Request, response: Response) => {
    
    const errors = validationResult(request);
        
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }
    
    return createCarController.handle(request,response)
})

router.get('/api/cars/:id', idCarValidator, (request: Request, response: Response) => {
    
    const errors = validationResult(request);
        
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }
    
    return getCarController.handle(request,response)
})

router.get('/api/cars', (request: Request, response: Response) => {
    return getAllCarController.handle(request,response)
})

router.put('/api/cars/:id', updateCarValidator, (request: Request, response: Response) => {
    
    const errors = validationResult(request);
        
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }

    return updateCarController.handle(request,response)
})

export { router }
 