const expect = require('chai').expect;
const delDoctorMW = require('../../../../middlewares/Doctor/delDoctorMW');

describe('delDoctorMW middleware', function () {
    it('torli az adatot és visszavisz a Doctors oldalra', function (done) {
        const mw = delDoctorMW();
        mw(
            {},
            {
                locals: {
                    doctorData: {
                        remove: (cb) => {
                            cb(null);
                        }
                    }
                },
                redirect: (where) => {
                    expect(where).to.be.eql('/Doctors');
                    done();
                }
            },
            {}
        );
    });
    it('az adat törlése közben hibát talál', function (done) {
        const mw = delDoctorMW();
        mw(
            {},
            {
                locals: {
                    doctorData: {
                        remove: (err) => {
                            expect(err).to.be.not.eql(undefined);
                            done();
                        }
                    }
                }
            },
            {}
        );
    });
    it('doctorData nem létezik', function (done) {
        const mw = delDoctorMW();
        mw(
            {},
            {
                locals: {
                    doctorData: undefined,
                },
                redirect:  (where)=>{
                    expect(where).to.be.eql(undefined);
                }
            },
            ()=>{
                done();
            },
        );
    });
});