// Assert Library
const expect = require('expect');

const utils = require('./utils');

/** Organize tests with describe()*/
describe('Utils', () =>{

    // We can also describe method by method
    describe('#add' , () => {
        // it is a function provided by mocha
        //BDD
        it('should add two numbers', () => {
            let result = utils.add(33,11);

            // if (result !== 44) {
            //     throw new Error(`Expected 44, but got ${result}`);
            // }
            /** Assert */
            // We can also chain
            expect(result)
                .toBe(44)
                .toBeA('number');
        });
    });

    it('should square a number', () => {
        let result = utils.square(3);

        // if(result !== 9) {
        //     throw new Error(`Expected 9, but got ${result}`);
        // }
        expect(result)
            .toBe(9)
            .toBeA('number');
    });

    it('should expect some values', () => {
        // expect(12).toNotBe(12);
        // expect({name:'Ivan'}).toEqual({name:'Ivan'});
        // expect({name:'ivan'}).toNotEqual({name:'Ivan'});
        // expect([2,3,4]).toInclude(2);
        // expect([2,3,4]).toExclude(1);
        expect({
            name:'Ivan',
            age: 25,
            location: 'Zagreb'
        }).toInclude({
            age:25
        });
    });

    it('should set firstName and lastName', () => {
        let user = {
            age: 25,
            location: 'Zagreb'
        };

        let result = utils.setName(user,'Ivan Krsnik');

        expect(result)
            .toInclude({
                firstName: 'Ivan',
                lastName: 'Krsnik'
            });
    });

    /** Testing Async Add*/
// When we put done as a argument then mocha knows we have async code
// We also have to call done() after assertions
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum)
                .toBe(7)
                .toBeA('number');
            done();
        });
    } );

    it('should async square a number', (done) => {
        utils.asyncSquare(3, (square) => {
            expect(square)
                .toBe(9)
                .toBeA('number');
            done();
        });
    });
});
