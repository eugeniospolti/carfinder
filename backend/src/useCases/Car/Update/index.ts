import { CarRepository } from "../../../infrastructure/persistence/repositories/car.repository";
import { UpdateCarController } from "./UpdateCarController";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

const carRepository = new CarRepository();

const updateCarUseCase = new UpdateCarUseCase(carRepository);

const updateCarController = new UpdateCarController(updateCarUseCase);

export { updateCarController };
