import PageNotFound404 from "../errors/pageNotFound404.js";

function handler404(req, res, next) {
    const pageNotFound = new PageNotFound404(res);
    next(pageNotFound);
}

export default handler404;