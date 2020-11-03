/**
 * Visszadja a bejelentkezett orvos patient objektumait és elmenti a res.locals.patients-be
 * A beteghez tartozó doktor nevét a res.locals.patient_doctor-ba menti.
 *
 * */


const requireOption = require('../Auth/requireOption');
const List = require("collections/list");
const async = require("async/index");



module.exports = function (objectRepository) {

    const PatientModel = requireOption(objectRepository, 'PatientModel');
    const DoctorModel = requireOption(objectRepository, 'DoctorModel');

    return function (req, res, next) {
        let i = 0;
        PatientModel.find({_name_doctor: req.session.felhasznalo._id}, {}, (err, patients) => {
            if (err) {
                console.log(err);
                next(err);
            }

            if(patients.length === 0) {
                res.locals.patient_doctor = req.session.felhasznalo.name;
                res.locals.patients = patients;
                next();
            }
            async.mapSeries(patients, function (patient,callback) {


                DoctorModel.findOne({_id: patient._name_doctor}, {name: 1}, (err, doctor) => {
                    if (err) {
                        console.log(err);
                        next(err);
                    }



                    callback(null, i++);

                    if(i === patients.length) next();
                })
            });
            res.locals.patient_doctor = req.session.felhasznalo.name;
            res.locals.patients = patients;


        });

    }
}