function notFoundHandler(req, res, next) {
    return res.status(404).json({
        statusCode : req.statusCode || 404,
        message : "not found this page..."
    })
}

// error hanler

function errorHandler(err, req, res, next) {
    return res.json({
        statusCode : req.statusCode || 500,
        message : err.message
    })
}

const errorsHandlers = {
    notFoundHandler,
    errorHandler
}

module.exports = errorsHandlers