import { param } from 'express-validator';
import { ValidationMessage } from '../../../common';

export const idCarValidator = [
  param('id', ValidationMessage.IdLength).isLength({ min: 24 , max: 24 })
];
