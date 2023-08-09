import BaseError from "./BaseError.js";

class ValidationError extends BaseError {
    constructor(error) {
        const errorMessage = Object.values(error.errors)
            .map(err => err.message)
            .join(';');
        
        super(`The following erros were found: ${errorMessage}`);
    }
}

export default ValidationError;