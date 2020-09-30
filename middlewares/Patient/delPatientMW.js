/**
 * Kitörli a patient objektumot:  res.locals.patient.
 * Ezek után visszatér a /Patients-ra
 * */

module.exports = function (objectRepository){
    return function (req,res,next){
        return next();
    }
}