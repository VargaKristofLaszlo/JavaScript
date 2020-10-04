const db = require('../config/db');

const Doctor = db.model('Doctor', {
    name: String,
    phone_number: Number,
    e_mail: String,
    med_spec: String,
    permission: Boolean,
});

module.exports = Doctor;



