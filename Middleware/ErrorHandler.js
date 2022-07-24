function LogError(err, req, res, next) {
    console.log('Error: , LogError');
    console.log(err);
    next(err);
}

function ErrorHandler(err, req, res, next) {
    console.log('Error: , ErrorHandler');
    res.status(500).json(
        {
            message: err.message,
            stack: err.stack
        });
}

function BoomError(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

module.exports = { LogError, ErrorHandler, BoomError };

