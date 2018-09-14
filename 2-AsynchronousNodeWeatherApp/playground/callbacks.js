/** Callback functions & APIs */

let getUser = (id, callback) => {
    let user = {
        id,
        name: 'Vikram'
    };
    setTimeout(() => {
        // we call given function
        callback(user);
    },3000);
};

// We send argument id and function to getUser function
getUser(31, (userObject)=>{
    console.log(userObject);
});