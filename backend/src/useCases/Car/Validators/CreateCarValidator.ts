import { body } from 'express-validator';
import { ValidationMessage } from '../../../common';

export const createCarValidator = [
    body('maker',ValidationMessage.Empty).not().isEmpty().trim().escape(),
    body('model_name',ValidationMessage.Empty).not().isEmpty().trim().escape(),
    body('year',ValidationMessage .Number).isNumeric(),
    body('color',ValidationMessage.Empty).not().isEmpty().trim().escape(),
    body('monthlyPrice',ValidationMessage.Number).isNumeric(),
    body('availableDate',ValidationMessage.Date).optional({ checkFalsy: true }).isISO8601()
  ];
