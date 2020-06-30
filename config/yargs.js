const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Eliminamos una tarea por hacer', {
        descripcion
    })
    .command('listar', 'Listado de tareas', {
        completado

    })
    .help()
    .argv;

module.exports = {
    argv
}