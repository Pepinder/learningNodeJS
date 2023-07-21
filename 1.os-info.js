const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('--------------------')
console.log('nombre del sistema operativo: ', os.platform())
console.log('version del sistema operativo: ', os.release())
console.log('Arquitectura : ', os.arch());
console.log('Cpus', os.cpus()) // vamos a poder escalar procesos en node
console.log('Memoria libre : ', os.freemem() / 1024 / 1024);
console.log('Memoria total : ', os.totalmem() / 1024 / 1024);
console.log('Tiempo encendido: ', os.uptime() / 60 / 60)
