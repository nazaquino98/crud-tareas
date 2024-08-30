import {body} from "express-validator"

 export const createTaskValidations = [
    body("title")
    .isString()
    .withMessage("title debe ser un string")
    .notEmpty()
    .withMessage("title no puede estar vacio"),
    body("description")
    .isString()
    .withMessage("description debe ser un string")
    .notEmpty()
    .withMessage("description no puede estar vacio"),
    body("isComplete")
    .isBoolean()
    .withMessage("isComplete debe ser un valor booleano")
]