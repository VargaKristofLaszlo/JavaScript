/**
 *  Ellenőrzi, hogy megfelelő-e a beírt jelszó.
 *  Ha a jelszó megfelelő lépjen tovább /Home-ra
 *  különben lépjen /?Error = WrongPassword-ra
 * */

module.exports = function (objectRepository){
    return function (req,res,next){

        return next();
    }
}