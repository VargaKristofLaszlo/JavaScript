/**
 * Visszadja a megindexelt orvoshoz tartozó megindexelt patient objektumot
 * Ha ez az objektum nem létezik akkor visszatér a /Patients-re
 * Ha létezik ez az objektum elhelyezi a res.locals.patient-be
 * */

const requireOption = require('../Auth/requireOption');

module.exports = function (objectRepository){

    const PatientModel = requireOption(objectRepository, 'PatientModel')

    return function (req,res,next){
        PatientModel.find({}, (err,patients)=>{
            if(err) {
                console.log(err);
                next(err);
            }
            res.locals.patients = patients;
            next();
        });


    }
}