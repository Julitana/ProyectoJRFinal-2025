console.log('Funcionando Archivo: API_Listado_Clientes');
const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"
// Datos locales simulando la API
let Datos_Locales = [];

let DatosFiltrados=[]
let contenedor = document.getElementById('tbody'); /// Se escribio fuera de la funcion para retutilizarlo 

DatosFiltrados = Datos_Locales

///aela ejecutador de eventos 
document.addEventListener('DOMContentLoaded', () => {
     
     consultarDatos() 

 });
/// fetchget 
 function consultarDatos() {
    fetch(Api_Usuarios) // nombre de la Api
     
        .then(response => response.json())
        .then(result => {
            // custom error // agregamos un console.logo con la palabra result para ver si esta teniendo resultado 
            console.log(result)
        })
        .catch(error => {
            // common error
            return null;
        });
    
 }
 

