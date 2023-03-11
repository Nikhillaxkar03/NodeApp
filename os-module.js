const os = require('os'); //OS Module


//info about current user

let user = os.userInfo();
console.log(user);

//method returns the systemes uptime in seconds

let upTime = os.uptime();

console.log(upTime);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS); 