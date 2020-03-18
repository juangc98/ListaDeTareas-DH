
let archivoTareas = require('./tareas');

let accion = process.argv[2];


switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        tareas.forEach(function(tarea, i ) {
            console.log(i + '. ' + tarea.titulo + ' (' + tarea.estado + ')' + ': ' + tarea.cuerpo)
        });
        console.log()
        break;

    case 'agregar': 
      let nuevaTarea = {
        titulo: "Prueba 1", 
        estado: "en progreso", 
        cuerpo: null
      };
        archivoTareas.escribirJSON2(nuevaTarea, null, " ");  
        console.log("Nueva tarea agregada!");
        break;
        
    case 'guardar': 
        let listaTareasObj = archivoTareas.leerJSON();
        let tareaAgregada = archivoTareas.leerJSON2();
        listaTareasObj.push(tareaAgregada);
        
        //console.log(listaTareasObj);  
        archivoTareas.escribirJSON(listaTareasObj);

        console.log("Guardada!");
        break; 

    case 'filtrar':
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

    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo :( ');
        console.log('Las acciones disponibles son: listar, agregar, guardar, filtrar o borrar.');
        break;
}
