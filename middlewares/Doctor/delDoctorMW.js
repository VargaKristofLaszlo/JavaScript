/**
 * Kitörli a doctor objektumot:  res.locals.doctor.
 * Ezek után visszatér a /Doctors-ra
 * */

module.exports = function (objectRepository){
    return function (req,res,next){
        return next();
    }
}