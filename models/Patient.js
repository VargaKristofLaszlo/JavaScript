const db = require('../config/db');
const Schema = require("mongoose");

const Patient = db.model('Patient', {
    name: String,
    illness: String,
    _name_doctor: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }],
    date_of_birth: Date
});

module.exports = Patient;




