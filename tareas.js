const fs = require('fs');

let archivoTareas = {

    archivo: 'listaTareas.json',
    nuevoArchivo: 'nuevaTarea.json',
    


    leerJSON: function () {
        if (fs.existsSync(this.archivo)){
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
        } else { 
        return console.log('No hay tareas :)');
        }
    },

    escribirJSON: function (datos) {
        return fs.writeFileSync(this.archivo, JSON.stringify(datos, null, ' '));
    },

    crear : function(nuevaTarea) {
        let listaDeTareas = this.leerJSON();
        listaDeTareas.push(nuevaTarea);
        this.escribirJSON(listaDeTareas);
        //fs.writeFileSync(this.archivo, JSON.stringify(listaDeTareas, null, ' '));
    },

    actualizar : function (indice, nuevoEstado) {
        let listaDeTareas = this.leerJSON();
        listaDeTareas.forEach(function(tarea, i){
            if (indice == i){
                tarea.estado = nuevoEstado;
            }
        })
      this.escribirJSON(listaDeTareas);
      //fs.writeFileSync(this.archivo, JSON.stringify(listaDeTareas, null, ' '))
    },

    eliminar: function (indice) {
        let listaTareas = this.leerJSON();
        listaTareas.map(function(x, i) {
            if (indice === i) {
                listaTareas.splice(i, 1);
            }
            return listaTareas
        })
        return this.escribirJSON(listaTareas);
     },
    

        //var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];for( var i = 0; i < arr.length; i++){ if ( arr[i] === 5) { arr.splice(i, 1); }}//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]

    /*leerJSON2: function () {
        return JSON.parse(fs.readFileSync(this.nuevoArchivo, 'utf-8'));
    },

  
    escribirJSON2: function (nuevaTarea) {
           let tareaArray = fs.writeFileSync(this.nuevoArchivo, JSON.stringify(nuevaTarea, null, ' '));
        },
    */
    
}

module.exports = archivoTareas;

