const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar } = require('./por-hacer/toDo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();


        for (let tarea of listado) {
            console.log("###### Por Hacer ######".green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log("#######################".green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log(`Se ha actualizado la tarea ${argv.descripcion}`);
        } else {
            console.log('No se encuentra la tarea');
        }
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        if (borrado) {
            console.log(`Se ha eliminado la tarea ${argv.descripcion}`);
        } else {
            console.log('No se encuentra la tarea');
        }
        break;
    default:
        console.log('Comando no reconocido');

}