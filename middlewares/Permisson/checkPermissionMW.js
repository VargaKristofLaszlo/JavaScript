/**
 * Új orvos objektumot csak a megfelelő joggal rendelkező orvosok tudnak felvenni.
 * Ezt a jogot ellenőrzi és ha nem megfelelő a jogosultsága a res.locals.doctor-nak akkor
 * visszlép a /Doctors-ra
 * */

module.exports = function (objectRepository){
    return function (req,res,next){
        if(req.session.felhasznalo.permission){
            next();
        }
        else
        {
            res.redirect('/Home');


        }

    }
}