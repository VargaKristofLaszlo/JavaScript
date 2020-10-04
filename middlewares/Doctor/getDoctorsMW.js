/**
 * Visszadja az összes  doktor objektumot és elmenti a res.locals.doctorData-ba
 * */

const requireOption = require('../Auth/requireOption');

module.exports = function (objectRepository){

    const DoctorModel = requireOption(objectRepository, 'DoctorModel')

    return function (req,res,next){
        DoctorModel.find({visible: true}, (err,doctors)=>{
            if(err) {
                console.log(err);
                next(err);
            }
            res.locals.doctorData = doctors;
            next();
        });


    }
}