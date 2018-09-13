let square = (x) => {
    let result = x*x;
    return result;
};

// Same as above
let square1 = x => x*x;

console.log(square1(9));

// Attowfunctions DONT bind this keyword
let user = {
    name: 'Ivan',
    sayHi: () => {
        console.log(`Hi! I am ${this.name}`);//Hi! I am undefined
    },
    // Regular function call
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi! I am ${this.name}.`);//Hi! I am Ivan
    }
};

user.sayHi();
user.sayHiAlt(1,2,3);