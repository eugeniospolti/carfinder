import { CarRepository } from "../../../infrastructure/persistence/repositories/car.repository";
import { GetCarController } from "./GetCarController";
import { GetCarUseCase } from "./GetCarUseCase";

const carRepository = new CarRepository();

const getCarUseCase = new GetCarUseCase(carRepository);

const getCarController = new GetCarController(getCarUseCase);

export { getCarController };
