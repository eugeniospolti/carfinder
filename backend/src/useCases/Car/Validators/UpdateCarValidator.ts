import { createCarValidator } from './CreateCarValidator';
import { idCarValidator } from './IdCarValidator';

export const updateCarValidator = [...createCarValidator,...idCarValidator];


