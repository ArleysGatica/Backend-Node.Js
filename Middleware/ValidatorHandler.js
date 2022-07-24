const boom = require('@hapi/boom');

function ValidatorHandler(Schema, property) {
    return (req, res, next) => {
        const date = req[property];
        const { error } = Schema.validate(date);
        if (error) {
            next(boom.badRequest(error));
        }
        next();
     }
}
module.exports = ValidatorHandler;

//Middleware de forma dinamica