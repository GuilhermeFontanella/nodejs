import BaseError from "./BaseError.js";

class IncorrectRequisition extends BaseError {
    constructor() {
        super("Something went wrong! Try again.", 400);
    }
}

export default IncorrectRequisition;