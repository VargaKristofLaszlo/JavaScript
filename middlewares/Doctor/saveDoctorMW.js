/**
 *  A Post paramétereit(rest.locals.doctor) felhasználva eldönti, hogy új objektumot kell-e mentenie vagy
 *  már egy meglévőt kell-e felülírnia
 *  Ha nem létezik írja felül, ha létezik akkor pedig update-elje
 *  Ha sikerült elvégeznie a műveletet akkor vigyen vissza a /Doctors-ra.
 * */

module.exports = function (objectRepository){
    return function (req,res,next){

        if( (typeof req.body.Name ==='undefined')           ||
            (typeof  req.body.Phone ==='undefined')  ||
            (typeof  req.body.Mail === 'undefined')       ||
            (typeof  req.body.Password === 'undefined')     ||
            (typeof  req.body.Specialty === 'undefined')
        ){
            return  next();
        }
        console.log('Work in progress');
        console.log(req.body);
        return res.redirect('/Doctors');
    }
}