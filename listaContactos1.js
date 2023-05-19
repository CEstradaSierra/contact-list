//nombre camilo estrada
// funcion imprimir
const imprimir= function(element){
    console.log(element);
}
/* //funcion capitalize letter
function capitalName(nombreCompleto){
    let nombres=nombreCompleto.split(" ");
    let nombre=nombres[0].charAt(0).toUpperCase() + nombres[0].slice(1);
    let apellido=nombres[1].charAt(0).toUpperCase() + nombres[1].slice(1);
    let nombreFormato=`${nombre} ${apellido}`;
    return nombreFormato;
}
//0.0 crea una funcion que dado un nombre y apellido lo almacena en una array
function creacionLista(numeroMiembros){
    let listaContactos=new Array();
    for(let contador=0;contador<=numeroMiembros;contador++){
        let miembro=prompt("ingrese el nombre y el apellido de la persona: ");
        let nombreApellido=capitalName(miembro);
        listaContactos.push(nombreApellido);

    }
    return listaContactos;
} */

// 1. crear una lista de contactos , esta es un array de objetos, el objeto debe tener id,nombre,apellido,telefono,ubicacion:ciudad y direccion
let listaContactos=[{id:123456,nombre:"Camilo",apellidos:"estrada sierra",telefono:3134450012,ubicacion:{ciudad:"medellin",direccion:"123 pivet drive"}}];
// 2. crea una funcion para añadir un nuevo contacto a una lista
function añadirContacto(array,id,nombre,apellidos,telefono,ciudad,direccion){
    const myObject={};
    // agrego los elementos
    myObject.id = id;
    myObject.nombre = nombre;
    myObject.apellidos=apellidos;
    myObject.telefono = telefono;
    myObject.direccion={ciudad,direccion};
    array.push(myObject);
    return array;
}
// ejemplo
const contactoUno=añadirContacto(listaContactos,456789,"isabel","bolaños martin",3114550077,"maracaibo","carrea 12 con 34");
console.log(contactoUno);
// 3.crea una una funcion para borrar un contacto existente
let borrarContacto= function(array,id,nombre,apellidos,telefono,ciudad,direccion){
    const myObject={};
    myObject.id = id;
    myObject.nombre = nombre;
    myObject.apellidos=apellidos;
    myObject.telefono = telefono;
    myObject.direccion={ciudad,direccion};
    array.pop(myObject);
    return array;
    
}
const contactoUnoBorr=borrarContacto(listaContactos,456789,"isabel","bolaños martin",3114550077,"maracaibo","carrea 12 con 34");
console.log(contactoUno);
//4.crea una funcion para imprimir en consola los contactos presentes en la lista
function imprimirContacto(arreglo){
    arreglo.forEach(element => {
        imprimir(element);
        
    });
}
