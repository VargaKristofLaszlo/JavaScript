/**
 * Visszadja az összes  patient objektumot és elmenti a res.locals.patients-be
 * */

module.exports = function (objectRepository){
    return function (res,req,next){
        return next();
    }
}