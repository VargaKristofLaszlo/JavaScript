const db = require('../config/db');
const Schema = require("mongoose");

const Patient = db.model('Patient', {
    name: String,
    illness: String,
    date_of_birth: Date,
    _name_doctor: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }]
});

module.exports = Patient;




