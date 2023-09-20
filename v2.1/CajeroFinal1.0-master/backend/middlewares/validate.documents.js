import {validationResult} from 'express-validator'
import { response } from "express";

const validateDocuments = (req , res=response, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => error.msg);
            return res.status(400).json({ errors: errorMessages });
        }
        next();
}
export default validateDocuments;