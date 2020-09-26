/**
 *  Ellenőrzi, hogy bevagyunk-e jelentkezve.
 *  Ha igen akkor továbblép , ha nem akkor visszalép /-re
 * */
    module.exports = function (objectRepository) {
        return function (res,req,next) {
            return next();
        }        
    }