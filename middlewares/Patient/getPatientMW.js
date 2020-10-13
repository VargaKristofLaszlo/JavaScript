/**
 * Visszadja a megindexelt orvoshoz tartozó megindexelt patient objektumot
 * Ha ez az objektum nem létezik akkor visszatér a /Patients-re
 * Ha létezik ez az objektum elhelyezi a res.locals.patient-be
 * */

const requireOption = require('../Auth/requireOption');

module.exports = function (objectRepository){

    const PatientModel = requireOption(objectRepository, 'PatientModel');
    const DoctorModel = requireOption(objectRepository, 'DoctorModel');
    let doctor_name;

    return function (req,res,next){
        PatientModel.findOne({_id: req.params.PatientID}, (err,patient)=>{
            if(err) {
                console.log(err);
                next(err);
            }
            DoctorModel.findOne({_id: patient._name_doctor},{name:1},(err,doctor)=> {
                if (err) {
                        console.log(err);
                        next(err);
                    }
                doctor_name = doctor.name;
                })


            res.locals.doctor_name = doctor_name;
            res.locals.patient = patient;
            next();
        });


    };
};