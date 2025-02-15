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
//Buscar Persona por Nombre
//Ingrese un nombre para buscar en la lista de personas.
/// Contar la cantidad de elementoos de un array o lista
console.log(personas.length);

let buscarnombre= personas.find(x =>x.nombre ==="Ana" )
console.log(buscarnombre)

//Buscar Primera Persona Activa
//Presione el botón para encontrar la primera persona activa en la lista.

let buscaractivo = personas.find(x => x.activo=== "true")
console.log(buscaractivo)

function Filtrar() {
    let valor = document.getElementById('sensitivo').value; //gi
    console.log(valor)
}

function buscarDesdeInput() {
    let input1 = document.getElementById('buscarNombre').value.trim();  //Metio el valor pepe
    let resultado = document.getElementById('resultadoBusqueda');
    
    //Busca en el arreglo 
    let busqueda = personas.find(x=> x.nombre.toUpperCase() === input1.toUpperCase()) //nombre == pepe
  
  
    //Aqui le indicamos si el resultado es verdadero o falso 
    if (busqueda) {
      
      resultado.innerHTML = `encontrado a la persona ${busqueda.nombre}`
  
    } else {
      resultado.innerHTML = `No encontrado a la persona`
    }
  }
  
//Crear la funcion del onclick //check 
// Input id value //no tiene 
//  mostrar el resultado inner 

function primeraPersonaActiva() {
    let resultado = document.getElementById('resultadoActivo');//inner 

    let busqueda = personas.find(x=> x.activo == true)

    
  //Aqui le indicamos si el resultado es verdadero o falso 
  if (busqueda) {
    
    resultado.innerHTML = `primera persona encontrada  ${busqueda.nombre}`

  } else {
    resultado.innerHTML = `No se encontro nadie activo `
  }

}
//Mostrar Todas las Personas.Presione el botón para mostrar todas las personas registradas.



function mostrarTodasLasPersonas() {
  let nombreBuscado = document.getElementById('nombreInput').value; // Obtener el valor del input
  let personas = personas.find(nombre => nombre === nombreBuscado); // Buscar el nombre exacto

  let contenedor = document.getElementById('mostrarTodasLasPersonas');
  
  if (personas) {
      contenedor.innerHTML = `<p>${personas}</p>`; // Mostrar solo el nombre encontrado
  } else {
      contenedor.innerHTML = `<p>Nombre no encontrado</p>`; // Mensaje si no existe
  }
}


function mostrarTodasLasPersonas() {
  const resultado = document.getElementById('listaPersonas');
  let contenido = ''; // Variable para almacenar el HTML

  personas.forEach(persona => {
    contenido += `
      <li class="list-group-item">
        <strong>Nombre:</strong> ${persona.nombre} <br>
        <br>
      </li>
    `;
  });

  resultado.innerHTML = contenido; // Insertar todo el HTML de una vez
}


//Crear la funcion del onclick  
// Input id value 
//  mostrar el resultado inner 
//caso 6



function personasActivas() {
  let listaActivos = document.getElementById('listaActivos');
  listaActivos.innerHTML = ''; 
  personas.forEach(element => {
      if (element.edad >= 18) { // Comprobar si la edad es mayor o igual a 18
          listaActivos.innerHTML += `
              <li class="list-group-item">
                  <strong>Nombre:</strong> ${element.nombre}<br>
                  <strong>Edad:</strong> ${element.edad}
              </li>
          `;
      }
  });
}





//Crear la funcion del onclick  
// Input id value 
//  mostrar el resultado inner 
//caso 6

function personasActivas() {
    let resultado = document.getElementById('listaActivos');

    personas.forEach(element => {
        
        if (element.activo == true) {
            
          resultado.innerHTML += `
          
            <li>nombre : ${element.nombre} </li>`
          
            
        }

    });
}