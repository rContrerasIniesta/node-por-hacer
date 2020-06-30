const fs = require('fs');

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, () => {});
}

const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

let actualizar = (descripcion, completado = true) => {
    cargarDB();
    let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (indice >= 0) {
        listadoPorHacer[indice].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

let borrar = (descripcion) => {
    cargarDB();
    let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (indice >= 0) {
        listadoPorHacer.splice(indice, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}