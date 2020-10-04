/**
 * Visszadja a megindexelt  doktor objektumot
 * Ha ez az objektum nem létezik akkor visszatér a /Doctors-ra
 * Ha létezik ez az objektum elhelyezi a res.locals.doctor-ba
 * */
const requireOption = require('../Auth/requireOption');

module.exports = function (objectRepository){

    const DoctorModel = requireOption(objectRepository, 'DoctorModel')

    return function (req,res,next){
        DoctorModel.findOne({_id: req.params.DoctorID}, (err,doctors)=>{
            if(err) {
                console.log(err);
                next(err);
            }
            res.locals.doctorData = doctors;
            next();
        });
    };
};