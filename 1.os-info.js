const os = require('node:os')

// console.log('Informacion del sistema operativo:')
// console.log('--------------------')
// console.log('nombre del sistema operativo: ', os.platform())
// console.log('version del sistema operativo: ', os.release())
// console.log('Arquitectura : ', os.arch());
// console.log('Cpus', os.cpus()) // vamos a poder escalar procesos en node
// console.log('Memoria libre : ', os.freemem() / 1024 / 1024);
// console.log('Memoria total : ', os.totalmem() / 1024 / 1024);
// console.log('Tiempo encendido: ', os.uptime() / 60 / 60)

function SUMLOOP(times) {
    let list = [423, 791, 116, 313, 1049, 504, 194, 219, 322, 1197, 184, 1251, 792, 1004, 330, 372, 884, 818, 1014, 428, 188, 529, 187, 1257, 55, 537, 377, 344, 1292, 155, 347, 602]

    let sumloop = 0

    for (let index = 0; index < times; index++) {
        sumloop += list[index];
    }
    console.log(sumloop)
}

SUMLOOP(32);
