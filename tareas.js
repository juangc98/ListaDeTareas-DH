const fs = require('fs');

let archivoTareas = {

    archivo: 'listaTareas.json',
    nuevoArchivo: 'nuevaTarea.json',

    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    leerJSON2: function () {
        return JSON.parse(fs.readFileSync(this.nuevoArchivo, 'utf-8'));
    },

    escribirJSON: function (a) {
        return fs.writeFileSync(this.archivo, JSON.stringify(a));
    },

    escribirJSON2: function (nuevaTarea) {
           let tareaArray = fs.writeFileSync(this.nuevoArchivo, JSON.stringify(nuevaTarea));
        },

    
}

module.exports = archivoTareas;

