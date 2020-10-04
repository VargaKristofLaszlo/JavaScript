const db = require('../config/db');

const Doctor = db.model('Doctor', {
    name: String,
    password: String,
    phone_number: Number,
    e_mail: String,
    med_spec: String,
    permission: Boolean,
    visible: Boolean
});

module.exports = Doctor;



