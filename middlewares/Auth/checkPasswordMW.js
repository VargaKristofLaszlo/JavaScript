/**
 *  Ellenőrzi, hogy megfelelő-e a beírt jelszó.
 *  Ha a jelszó megfelelő lépjen tovább /Home-ra
 *  különben jelzi a felhasználó számára a hibát.
 * */

const requireOption = require('../Auth/requireOption');

module.exports = function (objectRepository){

    const DoctorModel = requireOption(objectRepository, 'DoctorModel')

    return function (req,res,next){
        if(typeof req.body.password === 'undefined') return  next();


            DoctorModel.findOne({$and:[{name: req.body.username},{password: req.body.password}]}, (err,doctors)=>{
                if(err) {
                    console.log(err);
                    next(err);
                }
                if(doctors) return res.redirect('/Home');
                res.locals.error = 'Wrong password!';
                next();
            });
        }


}
