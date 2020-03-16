const fs = require('fs');

let archivoTareas = {

    archivo: 'tareas.json',
    nuevoArchivo: 'nuevaTarea.json',

    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function (nuevaTarea) {
        let tareaAgregada = JSON.stringify(nuevaTarea, null, ' ');
        fs.writeFileSync(this.nuevoArchivo, nuevaTarea);
    },

    //guardarJSON: function () {
    //    return this.archivo.pop(nuevaTarea)
    //}

}

module.exports = archivoTareas;

