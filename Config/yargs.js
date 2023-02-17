const argv = require('yargs')
.option('b',{
    alias: 'base',
    type:'number',
    demandOption : true
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10
})
.option('o',{
    alias: 'operador',
    type: 'string',
    default: '*'
})
.check((argv, options) =>{
    if(isNaN(argv.b)){
        throw 'La base debe ser un number'
    }else if(isNaN(argv.h)){
        throw 'El limite debe ser un number'
    }
    return true
}).argv


module.exports = argv