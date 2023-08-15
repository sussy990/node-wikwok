const os = require('os')
//info user
const user = os.userInfo()
console.log(user)

// uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem,
    
}
console.log(currentOS)