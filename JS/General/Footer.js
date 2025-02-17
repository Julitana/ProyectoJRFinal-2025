console.log('Archivo: Footer');
//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Footer()
    
});

function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('IdFooter'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

    <!-- Inicio: footer-informacion    -->
        <div class="container">
            <div class="row">
                <!-- Inicio: Contenedor 1 5 columnas  -->

                <div class="col-md-5 col-sm-6">
                    <!-- Fin: Contenedor 1 -->
                  <div class="enlaces-pie">
        <div class="enlaces-pie__contenedor">
          
          <ul class="enlaces-pie__lista">
            <h3>Servicios en linea</h3>
            <li><a href="#"> Matricula </a></li>
            <li><a href="#">Aula Vitual</a></li>
            <li><a href="#">Biblioteca</a></li>
          </ul>
          
          <ul class="enlaces-pie__lista">
            <h3>Admision y Becas</h3>
            <li><a href="/inscibete_hoy.html">Admision</a></li>
            <li><a href="/inscibete_hoy.html">Departamento de Registro </a></li>
            <li><a href="#">Becas Estudiantiles </a></li>
          </ul>
        </div>
      </div>
    
                </div>
                <!-- Fin: footer-mensaje -->

                <!-- Inicio: Contenedor 2 5 columnas  -->

                <div class="col-md-5 col-sm-6">

                    <!-- Fin: Contenedor 2 -->

                </div>
                <!-- Inicio: Contenedor 3 2 columnas  -->
                <div class=" col-md-2 col-sm-6 iconos ">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                    <!-- Fin: Contenedor 3 -->
                </div>

            </div>
            <!-- Inicio: Contenedor 1 12 columnas  -->
            <div class="col-md-12 ">
                <p class="text-muted">  <br>
                Derechos de Autor ABAN Language Academy</p>
            </div>
            <!-- Fin: footer-mensaje -->
 
    
`;
    
}
