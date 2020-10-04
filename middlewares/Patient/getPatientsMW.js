/**
 * Visszadja az összes  egy orvoshoz tartozó patient objektumot és elmenti a res.locals.patients-be
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