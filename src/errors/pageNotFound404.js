import BaseError from "./BaseError.js";

class PageNotFound404 extends BaseError {
    constructor(message = 'Página não encontrada') {
        super(message, 404);
    }
}

export default PageNotFound404;