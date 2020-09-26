/**
 *  A Post paramétereit(rest.locals.patient) felhasználva eldönti, hogy új objektumot kell-e mentenie vagy
 *  már egy meglévőt kell-e felülírnia
 *  Ha nem létezik írja felül, ha létezik akkor pedig update-elje
 * */

module.exports = function (objectRepository){
    return function (res,req,next){
        return next();
    }
}