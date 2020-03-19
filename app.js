
let archivoTareas = require('./tareas');

let accion = process.argv[2];


switch(accion) {

    case 'listar':
        console.log('Listado de tareas');
        console.log('-----------------');
        let estado = process.argv[3];
        let tareas = archivoTareas.leerJSON();
        
        if (estado == undefined){
           tareas.forEach(function (tarea, i) {
                console.log();
                console.log(i + '. ' + tarea.titulo + ' (' + tarea.estado + ')' + ': ' + tarea.cuerpo);
                console.log();
            })} else {
                let tareasPorEstado = tareas.filter(function(tarea) {
                    return tarea.estado === estado;
                });
                tareasPorEstado.forEach(e => {
                    console.log(e);
            })
          };
        console.log();
        break;

    case 'agregar': 
      let nuevaTarea = {
        titulo: "Prueba 5", 
        estado: "pendiente", 
        cuerpo: null
      };
        archivoTareas.crear(nuevaTarea);  
        console.log("Nueva tarea agregada!");
        break;
        
    /*case 'filtrar':
        let estado = process.argv[3];
        let todasTareas = archivoTareas.leerJSON();
        //let todasTareasObj = JSON.parse(todasTareas)
         let tareasPorEstado = todasTareas.filter(function(tarea){
            return tarea.estado === estado ; 
         });
         tareasPorEstado.forEach( e => {
           console.log(e)
             });
        // console.log(tareasPorEstado);
        break;
    */

    case 'eliminar':
        let indice = process.argv[3];
        //let tareaOut
        archivoTareas.eliminar(indice);
        console.log("La tarea " + indice + " fue eliminada.")
        //console.log(tareaEliminada)
        //console.log(tareaOut);
        break;

    case 'actualizar':
        let index = process.argv[3];
        let nuevoEstado = process.argv[4];
        archivoTareas.actualizar(index, nuevoEstado);
        let listadoTareas = archivoTareas.leerJSON();
        console.log("Estado actualizado " + listadoTareas[index]);
        break;

    
    //case 'ordenar':

    //case 'guardar': 
    //    let listaTareasObj = archivoTareas.leerJSON();
    //    let tareaAgregada = archivoTareas.leerJSON2();
    //    listaTareasObj.push(tareaAgregada);
    //    console.log(listaTareasObj);  
    //    archivoTareas.escribirJSON(listaTareasObj);
    //    console.log("Guardada!");
    //    break; 


    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo :( ');
        console.log('Las acciones disponibles son: listar, agregar, guardar, filtrar o borrar.');
        break;
}
