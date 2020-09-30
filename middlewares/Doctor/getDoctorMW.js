/**
 * Visszadja a megindexelt  doktor objektumot
 * Ha ez az objektum nem létezik akkor visszatér a /Doctors-ra
 * Ha létezik ez az objektum elhelyezi a res.locals.doctor-ba
 * */

module.exports = function (objectRepository){
    return function (req,res,next){

        res.locals.doctor = {
            _DoctorID: 'id1',
            Name: 'Teszt_Name',
            Phone_number: '01 23-234 5678',
            E_mail: 'tszt@mail.hu',
            Medical_specialty: 'field',
            Permission: 'admin',
            Password: '123456'
        };


        return next();
    }
}