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




        DoctorModel.find({username: req.body.username},(err,doctor)=>{
            if(err){next(err);}
            res.locals.doctor = doctor;
            console.log('res.locals.doctor: '+req.body.username);

            }
        )

        console.log(res.locals.doctor);
        res.locals.error = 'Wrong password!';
        next();



    }
}
