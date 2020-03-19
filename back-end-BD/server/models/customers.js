const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');


let Schema = mongoose.Schema;

let customerSchema = new Schema({
    strAddress: {
        type: String,
        required: [true, 'Por favor ingresa el address']
    },
    strCity: {
        type: String,
        required: [true, 'Por favor ingresa la city']
    },
    strCountry: {
        type: String,
        required: [true, 'Por favor ingresa el country']
    },
    strDistrict: {
        type: String,
        required: [true, 'Por favor ingresa el district']
    },
    strFirst_Name: {
        type: String,
        required: [true, 'Por favor ingresa el nombre']
    },
    strLast_Name: {
        type: String,
        required: [true, 'Por favor ingresa el apellido']
    },
    strStatus: {
        type: Boolean,
        default: true
    }
});

autoIncrement.initialize(mongoose.connection);
customerSchema.plugin(autoIncrement.plugin, {
    model: '_id',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

customerSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser único y diferente'
});

module.exports = mongoose.model('Customer', customerSchema);