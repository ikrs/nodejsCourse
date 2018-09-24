const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server',() => {

    describe('GET /', () => {

        it('should return hello world response', (done) => {
            //call supertest
            request(app)
                .get('/')
                .expect(404)
                // .expect('Hello World!')
                // .expect({
                //     error: 'Page not found.'
                // })
                .expect((res) => {
                    // We can provide a function that will get whole response object
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name:'Ivan',
                        age:31
                    });
                })
                .end(done);
        });
    });
});
