import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import IncorrectRequisition from "../errors/IncorrectRequisition.js";
import ValidationError from "../errors/ValidationError.js";
import PageNotFound404 from "../errors/pageNotFound404.js";
import NotFound from "../errors/NotFound.js";

function errorHandler(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new IncorrectRequisition().sendResponse(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ValidationError(erro).sendResponse(res);
    } else if (erro instanceof PageNotFound404) {
        new PageNotFound404().sendResponse(res);
    }  else if (erro instanceof NotFound) {
        new NotFound(erro).sendResponse(res);
    } else {
        new BaseError().sendResponse(res);
    }   
}

export default errorHandler;