/**
 * Visszadja az összes patient objektumot és elmenti a res.locals.patients-be
 * A beteghez tartozó doktor nevét a res.locals.patient_doctor-ba menti.
 * */

const requireOption = require('../Auth/requireOption');
const List = require("collections/list");

module.exports = function (objectRepository){

    const PatientModel = requireOption(objectRepository, 'PatientModel');
    const DoctorModel = requireOption(objectRepository, 'DoctorModel');
    let nameList = new List();
    return function (req,res,next){
        PatientModel.find({},{}, (err,patients)=>{
            if(err) {
                console.log(err);
                next(err);
            }


            patients.forEach(function (patient){
                DoctorModel.findOne({_id: patient._name_doctor},{name:1},(err,doctor)=> {
                    if (err) {
                        console.log(err);
                        next(err);
                    }
                   nameList.push(doctor.name);
                })
            });
            res.locals.patient_doctor = nameList;
            res.locals.patients = patients;
            next();
        });


    }
}