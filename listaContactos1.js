// funcion imprimir
const imprimir= function(element){
    console.log(element);
}
// 1. crear una lista de contactos con datos predefinidos
let listaContactos=["Camilo Estrada","Beatriz Sierra","Luis Eduardo Estrada","Alejandro Estrada"];
// 2. crea una funcion para añadir un nuevo contacto a una lista
function añadirContacto(contacto,index){
    listaContactos.splice(index,0,contacto);
}
// 3.crea una una funcion para borrar un contacto existente
let borrarContacto= function(index){
    listaContactos.splice(index,1);
}
//4.crea una funcion para imprimir en consola los contactos presentes en la lista
function imprimirContacto(arreglo){
    arreglo.forEach(element => {
        imprimir(element);
        
    });
}
