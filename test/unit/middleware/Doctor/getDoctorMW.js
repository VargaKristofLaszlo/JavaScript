const expect = require('chai').expect;
const getDoctorMW = require('../../../../middlewares/Doctor/getDoctorMW');

describe('getDoctorMW middleware', function (){
    it('vissza kellene adnia egy orvost a res.locals.doctorData-ban', function (done){
        const mw = getDoctorMW({
            DoctorModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '5'});
                    cb(null, 'doctor')
                }
            }
        });
        const resMock = {
            locals: {}
        };
        mw(
            {params:
                    {
                        DoctorID: '5'
                    }
            },
            resMock,
            (err)=>{
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({doctorData: 'doctor'});
                done();
            }

        )
    });
    it('az adatbázissal problémája kellene, hogy legyen és a next-et egy error-ral kéne hívnia', function (done){
        const mw = getDoctorMW({
            DoctorModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '5'});
                    cb('dbError', null)
                }
            }
        });
        const resMock = {
            locals: {}
        };
        mw(
            {params:
                    {
                        DoctorID: '5'
                    }
            },
            resMock,
            (err)=>{
                expect(err).to.be.eql( 'dbError');
                done();
            });
    });
    it('az adatbázis nem talál orvost és a next-et egy error-ral kéne hívnia', function (done){
        const mw = getDoctorMW({
            DoctorModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '5'});
                    cb(undefined, null)
                }
            }
        });
        const resMock = {
            locals: {}
        };
        mw(
            {params:
                    {
                        DoctorID: '5'
                    }
            },
            resMock,
            (err)=>{
                expect(err).to.be.eql( undefined);
                expect(resMock.locals).to.be.eql( {});
                done();
            });
    });
});