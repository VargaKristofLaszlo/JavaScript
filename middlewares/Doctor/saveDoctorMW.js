/**
 *  A Post paramétereit(rest.locals.doctorData) felhasználva eldönti, hogy új objektumot kell-e mentenie vagy
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

        if(typeof res.locals.doctorData ==='undefined')  {
            res.locals.doctorData = new DoctorModel();
        }

        res.locals.doctorData.name = req.body.Name;
        res.locals.doctorData.password = req.body.Password;
        res.locals.doctorData.phone_number = req.body.Phone;
        res.locals.doctorData.e_mail = req.body.Mail;
        res.locals.doctorData.med_spec = req.body.Specialty;
        if(req.body.Admin === 'on') res.locals.doctorData.permission = true;
        else res.locals.doctorData.permission  = false;
        res.locals.doctorData.visible = true;

       res.locals.doctorData.save((err)=>{
            if(err) return  next(err);
        })


        return res.redirect('/Doctors');


    }
}