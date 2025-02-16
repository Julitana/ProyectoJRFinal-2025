console.log('Funcionando Archivo: API_Listado_Clientes');
const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"
const Api2 = "https://rickandmortyapi.com/api/character"
// Datos locales simulando la API


let DatosFiltrados=[]
let DatosFilrados2 = []
let contenedor = document.getElementById('tbody'); /// Se escribio fuera de la funcion para retutilizarlo 


///aela ejecutador de eventos 
document.addEventListener('DOMContentLoaded', () => {
     
     consultarDatos() 
     consultarDatos2()
     consultarApiclientes()
    

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
            Mostrar_CampoTABLA()
        })
        .catch(error => {
            // common error
            return null;
        });
    
 }

 function consultarDatos2() {
    /// fetchget 
    fetch(Api2) // nombre de la Api
     
        .then(response => response.json())
        .then(result => {
            // custom error // agregamos un console.logo con la palabra result para ver si esta teniendo resultado 
            console.log(result.result)
           
        })
        .catch(error => {
            // common error
            return null;
        });
    
 }


 function Mostrar_CampoTABLA() {

    let html = ""
    
    DatosFiltrados.forEach(element => {
        console.log(element)
        html +=`
          <tr>
            <td>${element.id} </td>
            <td>${element.name}  </td>
            <td>${element.email} </td>
         </tr>
        `
    });
    contenedor.innerHTML= html
    
}


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


