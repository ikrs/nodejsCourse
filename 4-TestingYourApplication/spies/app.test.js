const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app.js');

describe('App', () => {

    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);

    it('should call the spy correctly', () => {

        let spy = expect.createSpy();
        // spy();
        // expect(spy).toHaveBeenCalled();
        spy('Ivan',32);
        expect(spy).toHaveBeenCalledWith('Ivan', 32);

    });

    it('should call saveUser with user object', () => {

        let email = 'ivankrs@gmail.com';
        let password = '123pce';

        app.handleSignup(email,password);
        // Send call to spy
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    });
});