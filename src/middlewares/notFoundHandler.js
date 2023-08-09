import NotFound from "../errors/NotFound.js";

function notFooundHandler(req, res, next) {
    const error404 = new NotFound().sendResponse();
    next(error404);
}

export default notFooundHandler;