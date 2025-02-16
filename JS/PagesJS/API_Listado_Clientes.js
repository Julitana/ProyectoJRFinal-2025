console.log('Funcionando Archivo: API_Listado_Clientes');
const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"
// Datos locales simulando la API


let DatosFiltrados=[]
let contenedor = document.getElementById('tbody'); /// Se escribio fuera de la funcion para retutilizarlo 


///aela ejecutador de eventos 
document.addEventListener('DOMContentLoaded', () => {
     
     consultarDatos() 

 });

  /// consultar datos del Api mediante Fetch (AJAX)
 function consultarDatos() {
    /// fetchget 
    fetch(Api_Usuarios) // nombre de la Api
     
        .then(response => response.json())
        .then(result => {
            // custom error // agregamos un console.logo con la palabra result para ver si esta teniendo resultado 
            console.log(result)
            DatosFiltrados=result
        })
        .catch(error => {
            // common error
            return null;
        });
    
 }

document.addEventListener('DOMContentLoaded', () => {
    consultarApiclientes()
    
});

function consultarApiclientes() {
    fetch(Api_Usuarios) /// 1-Se le indica la url de la Api

        .then(response => response.json()) /// 2- converison de datos , JSON 
        .then(result => {    /// 3- resultado 
            // custom error
            console.log(result)
        })
        .catch(error => { /// en caso de error 
            // common error
            alert("Error", error)
            return null;
        });

    
}


