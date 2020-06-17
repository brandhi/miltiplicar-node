//requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('====================================='.green);
    console.log(`==========Tabla del ${base}==========`.blue);
    console.log('====================================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de la base ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i}= ${i*base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });

}


module.exports = {
    crearArchivo,
    listarTabla
}