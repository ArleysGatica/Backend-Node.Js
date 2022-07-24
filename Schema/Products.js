//Schema o DETO
const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(5).max(30);
const price = Joi.number().integer().min(5);
const IMG = Joi.string().uri();

const CREATESchema = Joi.object({
    name: name.required(),
    price: price.required(),
    IMG: IMG.required()
});

const UPDATESchema = Joi.object({
    name: name,
    price: price,
    IMG: IMG
});

const GETSchema = Joi.object({
    id: id.required()
});

module.exports = {CREATESchema, UPDATESchema, GETSchema};