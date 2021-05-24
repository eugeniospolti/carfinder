import { CarRepository } from "../../../infrastructure/persistence/repositories/car.repository";
import { GetAllCarController } from "./GetAllCarController";
import { GetAllCarUseCase } from "./GetAllCarUseCase";

const carRepository = new CarRepository();

const getAllCarUseCase = new GetAllCarUseCase(carRepository);

const getAllCarController = new GetAllCarController(getAllCarUseCase);

export { getAllCarController };
