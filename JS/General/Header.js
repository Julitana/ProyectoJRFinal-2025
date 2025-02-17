
import {nombrePagina} from '../Datos/ConsultaDatos.js'



//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Footer()
    
});




function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('Header'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

  <div class="container">
                <div class="row">
                    <!-- Inicio: Contenedor 1  -->
                    <div class="col-md-6 col-sm-6 ">
                        <img src="Assets/mapa-mundial-sobre-fondo-color-azul-oscuro_43778-530.avif" class="w-100" alt="">
                    </div>
                    <!-- Fin: Contenedor 1 -->
                     <br>
                    <!-- Inicio: Contenedor 2  -->
                    <div class="col-md-6 col-sm-6">
                     <br>  <br> <br>
                        <!-- b4-jumbotron-default -->
                        <div class="">
                            <h1 class="lead text-center">¡Es momento de mirar al futuro! </h1>  
                           
                            <p class="lead mt-5">
                               ABAN Language Academy, rompiendo las barreras del idioma
                            </p>
                         

                            <a class="btn btn-secondary btn-lg mt-2 d-flex justify-content-center" href="Jumbo action link" role="button">Jumbo
                 Matricula ya!</a>


                        </div>
                    </div>
                    <!-- Fin: Contenedor  2-->
                </div>
            </div>

`;
    
}