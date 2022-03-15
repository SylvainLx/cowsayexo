
let userInfo = require('./information');
console.log(`Hi, my name is ${userInfo.name} and i study in ${userInfo.study}.`);


let cowsay = require("cowsay");
    console.log(cowsay.say({
        text : `Hi, my name is ${userInfo.name} and i study in ${userInfo.study}`,
        e : "oO",
        T : "U "

}));
