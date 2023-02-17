
const fs = require('fs')

const crearArchivo = async(base,limit = 10, listar = fals, operador = '*') =>{

    try {
        let salida = ''
        for(let i =1; i<= limit; i++){
            switch(operador){
                case '+': salida += `${base}+${i} = ${base+i} \n`
                    break;
                case '-': salida += `${base}-${i} = ${base-i} \n`
                    break;
                case '*': salida += `${base}x${i} = ${base*i} \n`
                    break;
                case '/': salida += `${base}/${i} = ${base/i} \n`
                    break;
                default: salida += `${base}x${i} = ${base*i} \n`
            }
        }

        if(listar){
            console.log(salida);
        }
        const archivo = `tabla-${base}.txt`

        fs.writeFileSync(archivo,salida)

        return archivo
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}