/**
 * Visszadja a megindexelt  patient objektumot
 * Ha ez az objektum nem létezik akkor visszatér a /Patients-re
 * Ha létezik ez az objektum elhelyezi a res.locals.patient-be
 * */

module.exports = function (objectRepository){
    return function (res,req,next){
        return next();
    }
}