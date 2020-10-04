/**
 *  A Post paramétereit(rest.locals.doctor) felhasználva eldönti, hogy új objektumot kell-e mentenie vagy
 *  már egy meglévőt kell-e felülírnia
 *  Ha nem létezik írja felül, ha létezik akkor pedig update-elje
 *  Ha sikerült elvégeznie a műveletet akkor vigyen vissza a /Doctors-ra.
 * */

const requireOption = require('../Auth/requireOption');

module.exports = function (objectRepository){
    const DoctorModel = requireOption(objectRepository, 'DoctorModel');
    return function (req,res,next){

        if( (typeof req.body.Name ==='undefined')           ||
            (typeof  req.body.Phone ==='undefined')  ||
            (typeof  req.body.Mail === 'undefined')       ||
            (typeof  req.body.Password === 'undefined')     ||
            (typeof  req.body.Specialty === 'undefined')) {
            return  next();
        }

        if(typeof res.locals.doctor ==='undefined')  {
            res.locals.doctor = new DoctorModel();
        }

        res.locals.doctor.name = req.body.Name;
        res.locals.doctor.password = req.body.Password;
        res.locals.doctor.phone_number = req.body.Phone;
        res.locals.doctor.e_mail = req.body.Mail;
        res.locals.doctor.med_spec = req.body.Specialty;
        if(req.body.Admin === 'on') res.locals.doctor.permission = true;
        else res.locals.doctor.permission  = false;
        res.locals.doctor.visible = true;

       res.locals.doctor.save((err)=>{
            if(err) return  next(err);
        })


        return res.redirect('/Doctors');


    }
}