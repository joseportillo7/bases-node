const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./Config/yargs')


/**LEER DATOS DESDE CONSOLA DE FORMA MANUAL. */
// console.log(process.argv);
// const [ , , arg3] = process.argv
// console.log(arg3);
// const [ , base] = arg3.split('=')
// console.log(base);

console.log(argv);

crearArchivo(argv.b, argv.h, argv.l, argv.o)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))