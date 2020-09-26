/**
 * Visszadja a megindexelt  doktor objektumot
 * Ha ez az objektum nem létezik akkor visszatér a /Doctors-ra
 * Ha létezik ez az objektum elhelyezi a res.locals.doctor-ba
 * */

module.exports = function (objectRepository){
    return function (res,req,next){
        return next();
    }
}