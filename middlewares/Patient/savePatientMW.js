/**
 *  A Post paramétereit(rest.locals.patient) felhasználva eldönti, hogy új objektumot kell-e mentenie vagy
 *  már egy meglévőt kell-e felülírnia
 *  Ha nem létezik írja felül, ha létezik akkor pedig update-elje
 * */

module.exports = function (objectRepository){
    return function (req,res,next){

        if( (typeof req.body.Name ==='undefined')           ||
            (typeof  req.body.Illness ==='undefined')  ||
            (typeof  req.body.Birth === 'undefined')       ||
            (typeof  req.body.Doctor_name === 'undefined')
        ){
            return  next();
        }
        console.log('Work in progress');
        console.log(req.body);


        return res.redirect('/Patients');
    }
}