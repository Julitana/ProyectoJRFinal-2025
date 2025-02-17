console.log('Funcionando Archivo: API_Listado_Clientes');

const Api1 = "https://randomuser.me/api/?results=10"

let DatosFiltrados1=[]
let contenedor1 = document.getElementById('tbody3'); 

document.addEventListener('DOMContentLoaded', () => {
    
    consultarDatos3()

   

});


function consultarDatos3() {
    /// fetchget 
    fetch(Api3) // nombre de la Api
     
        .then(response => response.json())
        .then(result => {
            // custom error // agregamos un console.logo con la palabra result para ver si esta teniendo resultado 
            console.log(result.results)
        
           
        })
        .catch(error => {
            // common error
            return null;
        });
    
 }


 
function Mostrar_CampoTABLA1() {

    let html = ""
    
    DatosFiltrados2.forEach(element => {
        console.log(element)
        html +=`
          <tr>
            <td>${element.name} </td>
            <td>${element.email}  </td>
                 <td>${element.email}  </td>
      
      
         </tr>
        `
    });
    contenedor.innerHTML= html
    
}
