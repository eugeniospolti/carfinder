import { CarRepository } from "../../../infrastructure/persistence/repositories/car.repository";
import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";

const carRepository = new CarRepository();

const createCarUseCase = new CreateCarUseCase(carRepository);

const createCarController = new CreateCarController(createCarUseCase);

export { createCarController};
