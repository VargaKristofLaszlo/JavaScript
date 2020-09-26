/**
 * Kitörli a patient objektumot:  res.locals.patient.
 * Ezek után visszatér a /Patients-ra
 * */

module.exports = function (objectRepository){
    return function (res,req,next){
        return next();
    }
}