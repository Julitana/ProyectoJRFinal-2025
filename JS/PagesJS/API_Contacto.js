console.log(`Funcionando Archivo: API_Contacto`);



document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Testimonios()
    Mostrar_Articulos()
    
});




function Mostrar_Testimonios() {
    let Contenedor_IdFooter = document.getElementById('Testimonios'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

   <div class="container">
          <h2></h2>
        <p class="h2 mb-2">
      "Idiomas que te conectan, clases que te transforman y puertas que te abren a nuevas oportunidades"
        </p>
        <a class="btn btn-primary  btn-lg" href="#" >Matricula ya! </a>
    </div>
                


`;
    
}

function Mostrar_Articulos() {
    let Contenedor_IdFooter = document.getElementById('Articulos'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

                <div class="container">

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class=" banderacontainercol-md-6 col-sm-6">
                      
                           <img src="Assets/mision-150x150.png" class="w-100"  alt="">
                         
                            <p>
                                Capacitar a las personas en diferentes idiomas mediante metodologías innovadoras y accesibles, fomentando el aprendizaje cultural y ayudándolos a alcanzar sus metas en un mundo globalizado. 
                                <br>
                            <a class="btn btn-primary btn-lg" href="#" >Read More</a>
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="banderacontainer col-md-6 col-sm-6">
                        <img src="Assets/vision1-300x300.png" class="w-100" alt="">
                       
                            <p>
                               Ser líderes en la enseñanza de idiomas, reconocidos internacionalmente por nuestra excelencia académica y compromiso con la comunicación global y el desarrollo cultural. 
                                <br>
                            <a class="btn btn-primary btn-lg" href="#" >Read More</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>
                      <br>
                </div>   
                        <!-- Fin: Contenedor  4-->
                    </div>

                </div>


`;
    
}