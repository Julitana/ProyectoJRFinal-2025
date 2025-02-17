console.log(`Funcionando Archivo: Inicio`);



document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Testimonios()
    Mostrar_Articulos()
    
});




function Mostrar_Testimonios() {
    let Contenedor_IdFooter = document.getElementById('Testimonios'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

   <div class="container">
          <h2>¿Porque escoger ABAN Language Academy?</h2>
        <p class="h2 mb-2">
       Ofrecemos clases dinámicas y personalizadas, impartidas por profesores altamente calificados, muchos de ellos nativos, en un formato 100% en línea y con horarios flexibles.
       ¡En nuestro instituto, transformarás tu potencial en éxito!
        </p>
        <a class="btn btn-danger btn-lg" href="#" >Matricula ya! </a>
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
                      
                           <img src="Assets/eeuu.png" class="w-100" alt="">
                           <h2>English</h2>
                            <p>
                                Aprende los fundamentos del idioma inglés de manera práctica y divertida .
                                <br>
                            <a class="btn btn-danger btn-lg" href="#" >Read More</a>
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="banderacontainer col-md-6 col-sm-6">
                        <img src="Assets/bandera españa.webp" class="w-100" alt="">
                            <h2>Enpañol</h2>
                            <p>
                               El español te lleva más lejos:conecta con más de 500 millones de hablantes.
                                <br>
                            <a class="btn btn-danger btn-lg" href="#" >Read More</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>
                      <br>
                </div> 
                          <!-- Inicio: Contenedor 3  -->
                        <div class=" banderacontainer col-md-6 col-sm-6">
                          <img src="Assets/Alemania.png" class="w-100" alt="">
                            <h2> Aleman - Deutsch</h2>
                            <p>
                                Domina el alemán y abre las puertas a estudios y trabajos en Europa.
                            </p>
                            <a class="btn btn-danger btn-lg" href="#">Read More</a>
                        </div>
                        <!-- Fin: Contenedor  3-->
                    </div>
                    <br>
                </div>
                            <!-- Inicio: Contenedor 4  -->
                        <div class=" banderacontainer col-md-6 col-sm-6">
                          <img src="Assets/bandera china.png" class="w-100" alt="">
                            <h2>普通话</h2>
                            <p>
                                "Aprende chino y conecta con el futuro económico global." 
                            </p>
                            <a class="btn btn-danger btn-lg" href="#">Read More</a>
                        </div>
                        <!-- Fin: Contenedor  4-->
                    </div>

                </div>


`;
    
}