console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];


let clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

console.log (personas[4].nombre)

console.log (personas[1].nombre)

//array quitelo y coloque su array 
personas.forEach(element => {
    console.log(element)
});

clientes.forEach(element => {
    
if (element.activo == true) {
    
}


    console.log(element.nombre,element.activo)
});